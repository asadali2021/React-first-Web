import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) =>  {
    
        return (
            <div>
                 <section id="header" className="">
               <div className="container-fluid">
                <div class="row">
            <div className="col-10 mx-auto">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1>{props.name}<strong className="brandname">Asad</strong></h1>
            <h2 className="my-3">I am a developer making hybrid applications and websites</h2>
            </div>
            <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
            </div>
            </div>
            <div>
                <img src={props.imgsrc} className="img-fluid animated" alt="Homeimg" style={{justifyContent:'right'}} id="pic" />
            </div>
                </div>

            </div>
               </section>
            </div>
        );
    
}

export default Common;