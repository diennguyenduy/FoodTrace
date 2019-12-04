import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FoodInfo from './pages/FoodInfo/foodInfo';
import QueryFood from './pages/QueryFood/queryFood';
import AddFood from './pages/AddFood/addFood';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/FoodInfo/:id' component={FoodInfo} />
          <Route path='/queryFood' component={QueryFood} />
          <Route path='/addFood' component={AddFood} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
