import React, { Component } from 'react';
import './index.css';
// import * as actions from '../../../redux/actions';
// import store from '../../../redux/store';

class SupplierAddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: null,
      ProductName: null,
      SupplierID: null,
      SupplierExDate: null,
      Quantity: null,
      loading: false
    };
  }

  render() {
    return (
      <div className='form-style-10'>
        <h1>Đăng ký phát hành thực phẩm</h1>
        <form method='post' action='#' novalidate>
          <div className='section'>Thông tin thực phẩm</div>
          <div className='inner-wrap'>
            <label>
              Product ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Product Name <input id='text' type='text' name='field' />
            </label>
            <label>
              Supplier ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Export Date <input id='text' type='text' name='field' />
            </label>
            <label>
              Quantity
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

export default SupplierAddInfo;
