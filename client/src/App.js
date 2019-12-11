import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login/Login';
import QueryProductInfo from './pages/QueryProductInfo/index';
import RetailerAddInfo from './pages/AddProductInfo/Retailer/retailerAddInfo';
import ProcessorAddInfo from './pages/AddProductInfo/Processor/processorAddInfo';
import SupplierAddInfo from './pages/AddProductInfo/Supplier/supplierAddInfo';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route path='/addInfo/supplier' component={SupplierAddInfo} />
          <Route path='/addInfo/processor' component={ProcessorAddInfo} />
          <Route path='/addInfo/retailer' component={RetailerAddInfo} />
          <Route path='/queryInfo' component={QueryProductInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
