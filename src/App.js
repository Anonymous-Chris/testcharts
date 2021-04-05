import './App.css';
import Rechartsbar from './components/Recharts/Bar/Rechartsbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table/Table';
import Piecharts from './components/Recharts/Piecharts/Piecharts';
import Piechart2 from './components/Recharts/Piecharts/Piechart_custom_label';
import Piechartpopup from './components/Recharts/Piecharts/Piechart_popup';

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
        <div className="col-lg-4 col-md-12 col-sm-12  heightofAll">
        <Piecharts/>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 heightofAll" >
          <Piechart2/>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 heightofAll" >
          <Piechartpopup/>
        </div>
      </div>
    </div>
  );
}

export default App;
