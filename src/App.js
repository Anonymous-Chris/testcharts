import './App.css';
import Rechartsbar from './components/Rechartsbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table';
import Piecharts from './components/Piecharts';
import Piechart2 from './components/Piechart_custom_label';

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

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 m-1 heightofAll">
        <Piecharts/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 m-1 heightofAll" >
          <Piechart2/>
        </div>
      </div>
    </div>
  );
}

export default App;
