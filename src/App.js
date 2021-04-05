import './App.css';
import Rechartsbar from './components/Rechartsbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 m-1 heightofAll">
        <Table/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 m-1 heightofAll" >
        <Rechartsbar/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 m-1 heightofAll">
        <Table/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 m-1 heightofAll" >
        <Rechartsbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
