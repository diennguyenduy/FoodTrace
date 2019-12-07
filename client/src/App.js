import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoodInfo from './pages/FoodInfo/foodInfo';
import QueryFood from './pages/QueryFood/queryFood';
import RetailerAddInfo from './pages/AddProductInfo/Retailer/retailerAddInfo';
import ProcessorAddInfo from './pages/AddProductInfo/Processor/processorAddInfo';
import SupplierAddInfo from './pages/AddProductInfo/Supplier/supplierAddInfo';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/FoodInfo/:id' component={FoodInfo} />
          <Route path='/queryFood' component={QueryFood} />
          <Route path='/addInfo/supplier' component={SupplierAddInfo} />
          <Route path='/addInfo/processor' component={ProcessorAddInfo} />
          <Route path='/addInfo/retailer' component={RetailerAddInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
