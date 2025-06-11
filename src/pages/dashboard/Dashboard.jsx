import React from 'react';
import Home from "../../components/Home";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Contact from "../Contact";
import Games from "../Games";
import Navbar from "../../components/Navbar";


const Dashboard = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Games/>
    <Contact />
  
  </>
  );
  
};

export default Dashboard;
