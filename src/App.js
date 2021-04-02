import './App.css';
import Multibar from './components/Multibar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-2">
        <p>hello</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10" style={{height:'500px'}}>
        <Multibar/>
        </div>
      </div>
    </div>
  );
}

export default App;
