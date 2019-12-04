import React, { Component } from 'react';
import './addFood.css';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: null,
      ProductName: null,
      RetailerID: null,
      RetailerImDate: null,
      Quantity: null,
      Product_ProcessorID: null,
      loading: false
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className='form-style-10'>
        <h1>Đăng ký phát hành thực phẩm</h1>
        {/* <!-- the form data is sent to a page on the server called "/addFood".
      This page contains a server-side script that handles the form data --> */}
        <form method='post' action='/addFood' novalidate>
          {/* <!-- The `method` attribute: specifies the HTTP method (GET or POST) to be used
          when submitting the form data:
          -post: form data NOT visible in the address bar of the new browser tab
          -get: the form values is visible in the address bar of the new browser tab
        --> */}
          {/* <!--thuộc tính `novalidate`: form sẽ không bắt lỗi nhập liệu khi submit
        ví dụ: không bắt lỗi khi nhập sai kiểu email: 123@@gmail.com
        --> */}
          <div className='section'>Thông tin thực phẩm</div>
          <div className='inner-wrap'>
            <label>
              Product ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Product Name <input id='text' type='text' name='field' />
            </label>
            <label>
              Retailer ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Import Date <input id='text' type='text' name='field' />
            </label>
            <label>
              Quantity
              <input id='text' type='text' name='field' />
            </label>
            <label>
              Product Processor ID
              <input id='text' type='text' name='field' />
            </label>
          </div>
          <div className='button-section'>
            <input type='submit' name='submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default AddFood;
