import React from 'react';

import './sectioncontainer.css';
import {About} from './About';
import {Skills} from './Skills';
import {Education} from './Education';
import {Projects} from './Projects';

export const SectionContainer = ({
    currentHeading, 
    currentSection,
    about,
    skills,
    projects,
    education }) => {
  
    return (
       <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{currentHeading}</h1>
            </div>
            <div className="section-component">
               {
                    {
                        about: <About bio={about.bio} />,
                        skills: <Skills skills={skills} />,
                        projects:<Projects projects={projects} />,
                        education:<Education education={education} />
                    }[currentSection]
                }
                
            </div>
        </div>
    )
}