import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import './query.css';

class QueryFood extends Component {
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
      <div>
        <div className='form-wrapper'>
          <Input
            type='string'
            id='query'
            placeholder='Mã số sản phẩm...'
            onChange={this.handleChange}
          />
          <Button id='submit' onClick={this.queryInfo}>
            Truy Xuất
          </Button>
          <Button id='submit' onClick={this.queryAlls}>
            Query All
          </Button>
        </div>
        <table cellspacing='0' id='query_source'>
          <tr>
            <th>Thông tin của sảm phẩm</th>
          </tr>
          <tr>
            <td>{this.state.productInfo}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default QueryFood;
