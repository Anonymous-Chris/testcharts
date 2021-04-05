import React,{Component} from 'react';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
          }
    } 
    

    render(){
     
        var data=[{"seq":1,"schedule":"2910000393","totalQty":170.0,"completeQty":170.0,"bottom":0.0,"top":0.0,"pth":9.0,"repair":5.0},{"seq":2,"schedule":"2910000304","totalQty":2000.0,"completeQty":2000.0,"bottom":0.0,"top":211.0,"pth":264.0,"repair":18.0},{"seq":3,"schedule":"2910000382","totalQty":10.0,"completeQty":10.0,"bottom":0.0,"top":0.0,"pth":0.0,"repair":5.0}]
        return(
            <div className=" ">
              <div className="card-titlel6">Schedule Work Order</div>
               <div className="card-contentl6">
             <div className="table-responsive">
               <table className="table table-striped table-dark">
                    <thead>
                        <tr> 
                        <th scope="col">Schedule</th>
                        <th scope="col">Total QTY</th>
                        <th scope="col">Complete QTY</th>
                        <th scope="col">Bottom</th>
                        <th scope="col">Top</th>
                        <th scope="col">Pth</th>
                        <th scope="col">Repair</th>
                            </tr>
                         </thead>   
                            <tbody>
                            { data.map(item =>
                                <tr key={item.seq}>
                                <th className="th_color" scope="row">{item.schedule}</th>
                                <td>{item.totalQty}</td>
                                <td>{item.completeQty}</td>
                                <td>{item.bottom}</td>
                                <td>{item.top}</td>
                                <td>{item.pth}</td>
                                <td>{item.repair}</td>
                               </tr>
                            )}
                       </tbody> 
                  </table>   
              </div>  
         </div>
            </div>
        );
    }
}

export default Table;