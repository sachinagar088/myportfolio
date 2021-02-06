import React from 'react';

import './sidenav.css';
import Pic from './../mypic.jpg';

export const SideNav = ({ handleEvent }) => {
  
    return (
        <div className="sidenav">
            <img
                src={Pic}
                className="avatar"
                alt="avatar"
            />
            <h1 className="main-name">Sachin Agarwal</h1>
            <p className="subtitle">"Passionate Coder"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleEvent("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleEvent("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleEvent("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleEvent("education")}>Education</p>
                <p className="section-list-element"  onClick={handleToLinkedin}>Contact</p>
            </div>
        </div>
    );
    function handleToLinkedin(){
        window.location="https://www.linkedin.com/in/sachin-agarwal-72ba8b179/";
    }   
};