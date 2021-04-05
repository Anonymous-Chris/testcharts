import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component{

    render(){
        return(
        <div className="row header pl-3">
            <Navbar className="navigation ml-3 pt-3">
            <NavLink className="ml-1" to="/page1"  activeStyle={{ color: '#rgb(40, 139, 226)' }}>Page1</NavLink>   
            <NavLink className="nav ml-1" to="/page2"  activeStyle={{ color: '#rgb(40, 139, 226)' }}>Page 2</NavLink> 
            </Navbar>

        </div>
        );
    }
}
 
export default Navigation;