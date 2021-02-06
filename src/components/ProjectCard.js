import React from 'react'

import './project-card.css';
import { SkillCard } from './SkillCard';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>NAME : </b> {project.name}</p>
            <p><b>DESCRIPTION : </b>{project.description}</p>
            <p><b>TECHNOLOGIES : </b></p>
        <div className="skills-container">
            <div className="industry-skill-container">
        {
        project.technologies.map(skill => <SkillCard skill={skill} />)
        }
        </div>
        </div>
        
        </div>
    )
}