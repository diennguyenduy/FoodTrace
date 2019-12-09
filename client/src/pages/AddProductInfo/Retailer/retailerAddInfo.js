import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, CardFooter, Card } from 'reactstrap';
import QRCode from 'qrcode.react';
import './index.css';
// import * as actions from '../../../redux/actions';
// import store from '../../../redux/store';

class RetailerAddInfo extends Component {
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
    this.submit = this.submit.bind(this);
  }

  handleChangeProductId = (e) => {
    this.setState({ ProductID: e.target.value });
  };
  handleChangeProductName = (e) => {
    this.setState({ ProductName: e.target.value });
  };
  handleChangeRetailerId = (e) => {
    this.setState({ RetailerID: e.target.value });
  };
  handleChangeImDate = (e) => {
    this.setState({ RetailerImDate: e.target.value });
  };
  handleChangeQuantity = (e) => {
    this.setState({ Quantity: e.target.value });
  };
  handleChangeProcessorId = (e) => {
    this.setState({ Product_ProcessorID: e.target.value });
  };

  async submit() {
    console.log('Gen QR code and submit success');
  }

  render() {
    return (
      <div className='form-style-10'>
        <h1>Đăng ký phát hành thực phẩm</h1>
        <form novalidate>
          <div className='section'>Thông tin thực phẩm</div>
          <div className='inner-wrap'>
            <label>
              Product ID{' '}
              <input id='text' type='text' name='field' onChange={this.handleChangeProductId} />
            </label>
            <label>
              Product Name{' '}
              <input id='text' type='text' name='field' onChange={this.handleChangeProductName} />
            </label>
            <label>
              Retailer ID{' '}
              <input id='text' type='text' name='field' onChange={this.handleChangeRetailerId} />
            </label>
            <label>
              Import Date{' '}
              <input id='text' type='text' name='field' onChange={this.handleChangeImDate} />
            </label>
            <label>
              Quantity
              <input id='text' type='text' name='field' onChange={this.handleChangeQuantity} />
            </label>
            <label>
              Product Processor ID
              <input id='text' type='text' name='field' onChange={this.handleChangeProcessorId} />
            </label>
          </div>
        </form>
        <div className='button-section'>
          <Button color='primary' id='toggler'>
            View QR Code
          </Button>
          <Button onClick={this.submit}>Submit</Button>
          <UncontrolledCollapse toggler='#toggler'>
            <Card>
              <CardBody>
                <QRCode
                  level='H'
                  includeMargin
                  value={
                    'Product ID: ' +
                    this.state.ProductID +
                    '\n' +
                    'Product name: ' +
                    this.state.ProductName +
                    '\n' +
                    'Retailer ID: ' +
                    this.state.RetailerID +
                    '\n' +
                    'Import Date: ' +
                    this.state.RetailerImDate +
                    '\n' +
                    'Quantity: ' +
                    this.state.Quantity +
                    '\n' +
                    'Processor ID: ' +
                    this.state.Product_ProcessorID
                  }
                />
              </CardBody>
              <CardFooter>
                <Button color='danger' id='toggler'>
                  Close
                </Button>
              </CardFooter>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    );
  }
}

export default RetailerAddInfo;
