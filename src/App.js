import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Portifolio from './Portifolio';

function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/portifolio" component={ Portifolio } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;