import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import CreateUser from "./CreateUser/CreateUser";
import "./userlist.css";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className='users-list'>
        <CreateUser isOpen={this.state.isOpen} toggle={this.toggle} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Org</th>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Supplier</td>
              <td>17021215</td>
              <td>Nguyen Van A</td>
              <td>Dev</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Supplier</td>
              <td>17021215</td>
              <td>Nguyen Thi B</td>
              <td>Tester</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Supplier</td>
              <td>17021215</td>
              <td>Tran Van C</td>
              <td>BA</td>
            </tr>
            <tr>{this.props.usersList}</tr>
          </tbody>
        </Table>
        <Button color='primary' onClick={this.toggle}>
          Thêm
        </Button>
      </div>
    );
  }
}

export default UsersList;
