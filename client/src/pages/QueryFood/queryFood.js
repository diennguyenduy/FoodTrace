import React, { Component } from 'react';
import './query.css';

class QueryFood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='form-wrapper'>
          <input
            type='text'
            id='query'
            placeholder='Mã số thực phẩm...'
            ng-model='query_id'
            required
          />
          <input type='submit' value='Tìm kiếm' id='submit' ng-click='querySource()' />
        </div>
        <table cellspacing='0' id='query_source'>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Retailer ID</th>
            <th>Import Date</th>
            <th>Quantity</th>
            <th>Processor ID</th>
          </tr>
          <tr>
            <td>{this.props.ProductID}</td>
            <td>{this.props.ProductName}</td>
            <td>{this.props.RetailerID}</td>
            <td>{this.props.ProductImDate}</td>
            <td>{this.props.RetailerImDate}</td>
            <td>{this.props.Product_ProcessorID}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default QueryFood;
