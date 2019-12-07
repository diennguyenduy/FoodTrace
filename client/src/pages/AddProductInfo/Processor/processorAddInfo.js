import React, { Component } from 'react';
import './index.css';
// import * as actions from '../../../redux/actions';
// import store from '../../../redux/store';

class ProcessorAddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: null,
      ProductName: null,
      ProcessorID: null,
      ProcessorImDate: null,
      ProcessorExDate: null,
      Quantity: null,
      Product_SupplierID: null,
      loading: false
    };
  }

  // async handleClick() {
  //   let type = parseInt(
  //     document
  //       .querySelector('div.slick-slide.slick-active.slick-current div.item-pet')
  //       .getAttribute('data-type')
  //   );

  //   let pet = Pet.find((element) => {
  //     return element.type === type;
  //   });

  //   await store.dispatch(
  //     actions.createNewPet(pet.type, pet.targetFund, pet.duration, this.state.purpose)
  //   );
  //   await store.dispatch(actions.getAllPets());
  // }

  // handleChange = (e) => {
  //   this.setState({ purpose: e.target.value });
  // };

  render() {
    return (
      <div className='form-style-10'>
        <h1>Đăng ký phát hành thực phẩm</h1>
        <form method='post' action='/addFood' novalidate>
          <div className='section'>Thông tin thực phẩm</div>
          <div className='inner-wrap'>
            <label>
              Product ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Product Name <input id='text' type='text' name='field' />
            </label>
            <label>
              Processor ID <input id='text' type='text' name='field' />
            </label>
            <label>
              Import Date <input id='text' type='text' name='field' />
            </label>
            <label>
              Export Date <input id='text' type='text' name='field' />
            </label>
            <label>
              Quantity
              <input id='text' type='text' name='field' />
            </label>
            <label>
              Product Supplier ID
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

export default ProcessorAddInfo;
