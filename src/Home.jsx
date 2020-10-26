import React, { Component } from 'react';
import image from './1.svg';
import Common from './Common';
const Home = () =>  {
    
        return (
            <div>
               <Common name="Grow your business with" imgsrc={image} visit="/about" btname="Get Started" />
            </div>
        );
    
}

export default Home;