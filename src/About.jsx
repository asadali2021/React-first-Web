import React, { Component } from 'react';
import image from './1.svg';
import Common from './Common';
const About = () =>  {
    
        return (
            <div>
               <Common name="Welcome to About Page " imgsrc={image} visit="/contact" btname="Contact Now" />  
            </div>
        );
    
}

export default About;