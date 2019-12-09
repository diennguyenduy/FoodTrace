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
    this.genQrCode = this.genQrCode.bind(this);
    this.submit = this.submit.bind(this);
  }

  // handleChange = (e) => {
  //   this.setState({ purpose: e.target.value });
  // };

  async genQrCode() {
    console.log('Here is QR code');
  }

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
        </form>
        <div className='button-section'>
          <Button color='primary' id='toggler'>
            View QR Code
          </Button>
          <Button onClick={this.submit}>Submit</Button>
          <UncontrolledCollapse toggler='#toggler'>
            <Card>
              <CardBody>
                <QRCode level='H' includeMargin value='https://facebook.com/diennguyenduy' />
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
