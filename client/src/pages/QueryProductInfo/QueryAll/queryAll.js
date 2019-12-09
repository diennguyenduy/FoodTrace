import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import './queryAll.css';

class QueryAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null
    };
    this.queryAlls = this.queryAlls.bind(this);
  }

  async queryAlls() {
    console.log('Query all');
    // await store.dispatch(actions.getAllProducts());
  }

  render() {
    return (
      <div className='query-all-product'>
        <div className='query-all'>
          <p>Truy xuất thông tin của tất cả các sản phẩm</p>
          <Button id='query-all-button' onClick={this.queryAlls}>
            Query All
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Danh sách tất cả các sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>111</td>
            </tr>
            <tr>
              <td>222</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default QueryAll;
