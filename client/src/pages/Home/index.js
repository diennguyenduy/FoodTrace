import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import partOfFoodLogo from "../../assets/img/part_of_food.jpg";
import businessLogo from "../../assets/img/business.png";
import submitLogo from "../../assets/img/submit.png";
// import batchingLogo from "../../assets/img/batching.jpg";
import transitLogo from "../../assets/img/transit.png";
import RoleModal from "../../components/Modal/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  async openModal() {
    await this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className='home-page'>
        <h1>Food Trace</h1>
        <div className='hand'>
          <div className='card suitdiamonds'>
            <img
              src={submitLogo}
              className='image-icon'
              alt='Logo'
              onClick={this.openModal}
            ></img>
            <RoleModal isOpen={this.state.isOpen} toggle={this.openModal} />
            <p>Xuất bản hàng hóa</p>
          </div>
          <div className='card suitdiamonds'>
            <Link to={`/queryInfo`}>
              <img src={partOfFoodLogo} className='image-icon' alt='Logo' />
            </Link>
            <p>Truy xuất thông tin sản phẩm</p>
          </div>
          <div className='card suitdiamonds'>
            <Link to={`/userlist`}>
              <img src={businessLogo} className='image-icon' alt='Logo' />
            </Link>
            <p>Danh sách thành viên</p>
          </div>
          <div className='card suitdiamonds'>
            <Link to='#'>
              <img src={transitLogo} className='image-icon' alt='Logo' />
            </Link>
            <p>Truy vấn chuyển tuyến</p>
          </div>
          {/* <div className='card suitdiamonds'>
            <img src={transitLogo} className='image-icon' alt='Logo' />
            <p>Transit goods</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
