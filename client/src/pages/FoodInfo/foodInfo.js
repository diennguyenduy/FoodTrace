import React, { Component } from 'react';
import './detail.css';

class FoodInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table cellspacing='0' id='query_source'>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Retailer ID</th>
          <th>Imort Date</th>
          <th>Quantity</th>
          <th>Processor ID</th>
        </tr>
        <tr>
          <td>{this.props.ProductID}</td>
          <td>{this.props.ProductName}</td>
          <td>{this.props.RetailerID}</td>
          <td>{this.props.RetailerImDate}</td>
          <td>{this.props.Quantity}</td>
          <td>{this.props.Product_ProcessorID}</td>
        </tr>
      </table>
    );
  }
}

export default FoodInfo;
