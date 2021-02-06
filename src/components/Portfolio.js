import React from 'react';

import { SideNav } from './SideNav';
import { SectionContainer } from './SectionContainer';

import './portfolio.css';

export const Portfolio = ({ 
    handleEvent,
    currentHeading, 
    currentSection,
    about,
    skills,
    projects,
    education }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleEvent={handleEvent}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    currentSection={currentSection}
					currentHeading={currentHeading}
					about={about}
					skills={skills}
					projects={projects} 
                    education={education}/>
            </div>
        </div>
    );
};