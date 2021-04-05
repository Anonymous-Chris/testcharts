import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/components/Navigation/Navigation';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <BrowserRouter>
      <Navigation/>

      <Switch>    
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
