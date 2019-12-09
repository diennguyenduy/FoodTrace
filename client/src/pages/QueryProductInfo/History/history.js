import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './history.css';

class History extends Component {
  // async componentDidMount() {
  //   await store.dispatch(actions.getAllHistory());
  // }

  render() {
    return (
      <div className='history'>
        <h1>All Transaction History</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>17021215</td>
              <td>Jan 13 1999</td>
              <td>UET</td>
              <td>VNU</td>
              <td>60kg</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>17021215</td>
              <td>Jan 13 1999</td>
              <td>UET</td>
              <td>VNU</td>
              <td>60kg</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>17021215</td>
              <td>Jan 13 1999</td>
              <td>UET</td>
              <td>VNU</td>
              <td>60kg</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default History;
