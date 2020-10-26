import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <>
            <div className="container-fluid nav-bg">
                <div class="row">
            <div className="col-10 mx-auto">

            
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="/"> Asad Ali</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
      </li>
    </ul>
       </div>
       </nav>
       </div>
                </div>

            </div>
</>

        );
    }
}

export default Navbar;