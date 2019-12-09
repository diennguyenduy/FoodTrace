import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './Modal.css';
import farmLogo from '../../assets/img/Farm.png';
import transportLogo from '../../assets/img/shipped.png';
import retailerLogo from '../../assets/img/supermarket.png';

class RoleModal extends React.Component {
  render() {
    return (
      <div>
        <Modal className='modal-dialog' isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader>
            <p id='modal-tittle'>Lựa chọn khâu nhập liệu</p>
          </ModalHeader>
          <ModalBody>
            <div className='role-card'>
              <div className='supplier-card'>
                <Link to='/addInfo/supplier'>
                  <img id='image-icon' src={farmLogo} alt='Supplier'></img>
                </Link>
                Nhà Cung Cấp
              </div>
              <div className='processor-card'>
                <Link to='/addInfo/processor'>
                  <img id='image-icon' src={transportLogo} alt='Transporter'></img>
                </Link>
                Vận chuyển
              </div>
              <div className='retailer-card'>
                <Link to='/addInfo/retailer'>
                  <img id='image-icon' src={retailerLogo} alt='Retailer'></img>
                </Link>
                Nhà bán lẻ
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            Lưu ý: Nếu bạn chọn sai vị trí của mình thì quá trình thêm thông tin cho sản phẩm sẽ xảy
            ra lỗi
          </ModalFooter>
          <Button id='cancel-button' onClick={this.props.toggle}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}

export default RoleModal;
