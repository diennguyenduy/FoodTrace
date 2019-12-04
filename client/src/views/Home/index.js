import React, { Component } from 'react';
import './index.css';
import userFoodLogo from '../../images/user-food.jpg';
import partOfFoodLogo from '../../images/part_of_food.jpg';
import businessLogo from '../../images/business.png';
import submitLogo from '../../images/submit.png';
import batchingLogo from '../../images/batching.jpg';
import transitLogo from '../../images/transit.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Food Trace</h1>
        <div class='hand'>
          <div class='card suitdiamonds' onclick="window.location='/queryFood';">
            <img src={userFoodLogo} class='image-icon' alt='Logo' />
            <p>Truy xuất thông tin thực phẩm</p>
          </div>
          <div class='card suitdiamonds' onclick="window.location='/part_search';">
            <img src={partOfFoodLogo} class='image-icon' alt='Logo' />
            <p>Điều tra thành phần</p>
          </div>
          <div class='card suitdiamonds' onclick="window.location='/business_search';">
            <img src={businessLogo} class='image-icon' alt='Logo' />
            <p>Truy vấn chuyển tuyến</p>
          </div>
          <div class='card suitdiamonds' onclick="window.location='/addFood';">
            <img src={submitLogo} class='image-icon' alt='Logo' />
            <p>Xuất bản hàng hóa</p>
          </div>
          <div class='card suitdiamonds' onclick="window.location='/part_form';">
            <img src={batchingLogo} class='image-icon' alt='Logo' />
            <p>Thêm thành phần</p>
          </div>
          <div class='card suitdiamonds' onclick="window.location='/transit_form';">
            <img src={transitLogo} class='image-icon' alt='Logo' />
            <p>Transit goods</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
