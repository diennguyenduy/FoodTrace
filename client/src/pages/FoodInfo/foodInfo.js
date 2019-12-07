import React, { Component } from 'react';
import './detail.css';

class FoodInfo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <table cellspacing='0' id='query_source'>
        <tr>Thông tin của sản phẩm</tr>
        <tr>{this.props.productInfo}</tr>
      </table>
    );
  }
}

export default FoodInfo;
