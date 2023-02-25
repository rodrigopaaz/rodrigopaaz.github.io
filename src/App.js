import React from 'react';
import '../src/styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Portifolio from './pages/Portifolio';

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