import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, Row, Col, Button } from 'reactstrap';
import QueryById from './QueryById/queryById';
import QueryAll from './QueryAll/queryAll';
import History from './History/history';
import './index.css';

class QueryProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
    // this.toggle = this.toggle.bind(this);
  }

  async toggle(tab) {
    if (this.state.activeTab !== tab)
      this.setState({
        activeTab: tab
      });
  }

  render() {
    return (
      <div className='query-product-info'>
        <Nav card>
          <NavItem>
            {' '}
            <Button
              className='nav-button'
              onClick={() => this.toggle('1')}
              data-toggle='tooltip'
              data-placement='bottom'
              title='All the history of transaction'
            >
              History
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className='nav-button'
              onClick={() => this.toggle('2')}
              data-toggle='tooltip'
              data-placement='bottom'
              title='Query informations of all product'
            >
              Query All
            </Button>
          </NavItem>
          <NavItem>
            {' '}
            <Button
              className='nav-button'
              onClick={() => this.toggle('3')}
              data-toggle='tooltip'
              data-placement='bottom'
              title='Query the informations of a product by its ID'
            >
              Query By Id
            </Button>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col xs='12'>
                <History />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col xs='12'>
                <QueryAll />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col xs='12'>
                <QueryById />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default QueryProductInfo;
