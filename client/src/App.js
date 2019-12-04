import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import FoodInfo from './views/FoodInfo/foodInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={FoodInfo} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
