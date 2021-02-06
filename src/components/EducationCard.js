import React from 'react';

import './education-card.css';

export const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <p><img src={education.logo} alt="avatar1" className="avatar1" align="right" />
            <p><b>EDUCATON : </b>{education.Degree}</p>
            <p><b>INSTITUTE : </b> {education.Institute}</p>
            <p><b>DURATION : </b>{education.Duration} </p>
            <p><b>MARKS : </b>{education.Marks}</p></p>
            
            
        </div>
    )
}