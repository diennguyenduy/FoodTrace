import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import QueryProductInfo from "./pages/QueryProductInfo/index";
import RetailerAddInfo from "./pages/AddProductInfo/Retailer/retailerAddInfo";
import ProcessorAddInfo from "./pages/AddProductInfo/Processor/processorAddInfo";
import SupplierAddInfo from "./pages/AddProductInfo/Supplier/supplierAddInfo";
import UsersList from "./components/UsersList/UsersList";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/addInfo/supplier' component={SupplierAddInfo} />
          <Route path='/addInfo/processor' component={ProcessorAddInfo} />
          <Route path='/addInfo/retailer' component={RetailerAddInfo} />
          <Route path='/queryInfo' component={QueryProductInfo} />
          <Route path='/userlist' component={UsersList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
