import React from 'react';
import Scatterplot from '../Scatterplot/Scatterplot';
import RadarChart from '../RadarChart/RadarChart';

export default class Page2 extends React.Component{
    render(){
        return(
            <div>
            <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 heightofAll">
                <Scatterplot/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 heightofAll" >
            <RadarChart/>
            </div>
          </div>
    
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 heightofAll">
            <p>1</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 p-1 heightofAll" >
            <p>1</p>
            </div>
          </div>
    
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12  heightofAll">
            <p>1</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 heightofAll" >
            <p>1</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 heightofAll" >
            <p>1</p>
            </div>
          </div>
          </div>
        );
    }
}

