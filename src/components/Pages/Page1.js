import Rechartsbar from '../Recharts/Bar/Rechartsbar';
import Rechartsbar_customizeddot from '../Recharts/Bar/Rechartsbar_customizeddot';
import Table from '../Table/Table';
import Piecharts from '../Recharts/Piecharts/Piecharts'; 
import Piechart2 from '../Recharts/Piecharts/Piechart_custom_label';
import Piechartpopup from '../Recharts/Piecharts/Piechart_popup';
import React from 'react';
export default class Page1 extends React.Component{
    render(){
        return(
            <div>
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
            <Rechartsbar_customizeddot/>
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
}