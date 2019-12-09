import React, { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import './query.css';

class QueryById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      productInfo: null
    };

    this.queryInfo = this.queryInfo.bind(this);
    this.queryAlls = this.queryAlls.bind(this);
  }

  async queryInfo() {
    console.log('product ID: ' + this.state.id);
    // await store.dispatch(
    //   actions.getProductInfo(this.state.id)
    // );
  }

  async queryAlls() {
    console.log('Query all');
    // await store.dispatch(actions.getAllProducts());
  }

  handleChange = (e) => {
    this.setState({ id: e.target.value });
  };

  render() {
    return (
      <div className='query-info-by-id'>
        <div className='query-id'>
          <p>Truy xuất thông tin theo ID của sản phẩm</p>
          <Input
            type='string'
            id='query'
            placeholder='Mã số sản phẩm...'
            onChange={this.handleChange}
          />
          <Button id='submit' onClick={this.queryInfo}>
            Truy Xuất
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Thông tin của sảm phẩm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
            </tr>
            <tr>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>Larry</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default QueryById;
