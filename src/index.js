import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/navigation bar/navbar';
import Hero from './component/heropage/hero';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './component/myportfolio/portfolio';
import Aboutme from './component/aboutme/aboutme';
import Myskill from './component/myskills/myskill';
import Project from './component/projects/Project';
import Homepage from './Homepage';
import ScrollToTop from './component/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/myportfolio" element={<Homepage />} />
        <Route path="/project" element={<Project />} />
      </Routes>

    {/* <Hero />
    <Portfolio />
    <Aboutme />
    <Myskill /> */}
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();