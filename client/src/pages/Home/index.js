import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import userFoodLogo from '../../assets/img/user-food.jpg';
import partOfFoodLogo from '../../assets/img/part_of_food.jpg';
import businessLogo from '../../assets/img/business.png';
import submitLogo from '../../assets/img/submit.png';
import batchingLogo from '../../assets/img/batching.jpg';
import transitLogo from '../../assets/img/transit.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Food Trace</h1>
        <div className='hand'>
          {/* <div className='card suitdiamonds'>
            <img src={partOfFoodLogo} className='image-icon' alt='Logo' />
            <p>Điều tra thành phần</p>
          </div> */}
          {/* <div className='card suitdiamonds'>
            <img src={businessLogo} className='image-icon' alt='Logo' />
            <p>Truy vấn chuyển tuyến</p>
          </div> */}
          <div className='card suitdiamonds'>
            <Link to={`/addFood`}>
              <img src={submitLogo} className='image-icon' alt='Logo' />
            </Link>
            <p>Xuất bản hàng hóa</p>
          </div>
          <div className='card suitdiamonds'>
            <Link to={`/queryFood`}>
              <img src={partOfFoodLogo} className='image-icon' alt='Logo' />
            </Link>
            <p>Truy xuất thông tin sản phẩm</p>
          </div>
          {/* <div className='card suitdiamonds'>
            <img src={batchingLogo} className='image-icon' alt='Logo' />
            <p>Thêm thành phần</p>
          </div>
          <div className='card suitdiamonds'>
            <img src={transitLogo} className='image-icon' alt='Logo' />
            <p>Transit goods</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
