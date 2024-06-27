import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTopButton from './scrollIcon';

export const Serve=()=>{
    return(
    <>
    <Navbar/>
    <div className="mt-16"><Home/></div>
    <div className="mt-44"><About/></div>
    <div className="mt-44"><Skills/></div>
    <div className="mt-44"><Projects/></div>
    <div className="mt-32"><Contact/></div>    
    <div className="mt-28"><Footer/></div> 
    <ScrollToTopButton />  
    </>
);

}
