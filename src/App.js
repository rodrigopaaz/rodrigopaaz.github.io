import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exac path='/' component={Home} />
      </Switch>
      </div>
  );
}

export default App;
