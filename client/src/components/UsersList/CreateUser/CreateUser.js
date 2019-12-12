import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./createuser.css";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userOrg: null,
      userName: null,
      emPosition: null,
      isOpen: false
    };
    this.create = this.create.bind(this);
  }

  userOrg = async (e) => {
    await this.setState({
      userOrg: e.target.name
    });
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.userOrg);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  create = () => {
    console.log(
      "Create success user: " +
        this.state.userName +
        " " +
        this.state.emPosition +
        " " +
        this.state.userOrg
    );
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className='create-user'>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader>Tạo tài khoản</ModalHeader>
          <ModalBody>
            <form>
              <div className='inner-wrap'>
                <label>
                  Name
                  <input
                    id='text'
                    type='text'
                    name='userName'
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Position
                  <input
                    id='text'
                    type='text'
                    name='emPosition'
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Org
                  <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Organization</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem name='Retailer' onClick={this.userOrg}>
                        Retailer
                      </DropdownItem>
                      <DropdownItem name='Processor' onClick={this.userOrg}>
                        Processor
                      </DropdownItem>
                      <DropdownItem name='Supplier' onClick={this.userOrg}>
                        Supplier
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.create}>
              Đồng Ý
            </Button>
            <Button color='danger' onClick={this.props.toggle}>
              Hủy Bỏ
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateUser;
