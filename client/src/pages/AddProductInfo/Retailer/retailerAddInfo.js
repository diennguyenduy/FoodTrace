import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
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
      loadingModal: false
    };
    this.submitTransaction = this.submitTransaction.bind(this);
    this.downloadQR = this.downloadQR.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTransaction = async () => {
    // await submit transaction success
    await this.setState({
      loadingModal: true
    });
  };

  downloadQR = () => {
    const canvas = document.getElementById('product-qrcode');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'product-qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  closeModal = () => {
    this.setState({
      loadingModal: false
    });
  };

  render() {
    return (
      <div className='form-style-10'>
        <h1>Đăng ký phát hành thực phẩm</h1>
        <form>
          <div className='section'>Thông tin thực phẩm</div>
          <div className='inner-wrap'>
            <label>
              Product ID
              <input id='text' type='text' name='ProductID' onChange={this.handleChange} />
            </label>
            <label>
              Product Name
              <input id='text' type='text' name='ProductName' onChange={this.handleChange} />
            </label>
            <label>
              Retailer ID
              <input id='text' type='text' name='RetailerID' onChange={this.handleChange} />
            </label>
            <label>
              Import Date
              <input id='text' type='text' name='RetailerImDate' onChange={this.handleChange} />
            </label>
            <label>
              Quantity
              <input id='text' type='text' name='Quantity' onChange={this.handleChange} />
            </label>
            <label>
              Product Processor ID
              <input
                id='text'
                type='text'
                name='Product_ProcessorID'
                onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
        <div className='button-section'>
          <Button onClick={this.submitTransaction}>Submit & Gen QR Code</Button>
          <Modal isOpen={this.state.loadingModal}>
            <ModalHeader>Mã QR Của Sản Phẩm</ModalHeader>
            <ModalBody>
              <QRCode
                id='product-qrcode'
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
            </ModalBody>
            <ModalFooter>
              <a href='#' onClick={this.downloadQR}>
                Download QR
              </a>
              <Button color='danger' onClick={this.closeModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default RetailerAddInfo;
