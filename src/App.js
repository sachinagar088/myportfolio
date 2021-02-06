import React from 'react';

import {Portfolio} from './components/Portfolio';
import './App.css';
import VIT from './vitlogo.jpg';
import DAV from './davlogo.jpg';
import RKMS from './rkmslogo.jpg';


export const about = {
    heading: "About Me",
    "bio": "Nature Lover and a Developer with a passion for solving real-world problems, a Full-Stack Developer, and a Tech Enthusiast who is always curious to learn about recent technologies. I am currently pursuing my B.Tech Degree in Computer Science and Engineering.I am a hardworking person and work in a well-organized way of scheduling my work efficiently. Always ready to do some challenging work."
};

export const skills = {
    heading: "Skills",
    techSkills: [
        "SpringBoot",
        "Hibernate",
        "ReactJS",
        "JavaScript",
        "NodeJS",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "PHP",
        "MongoDB",
        "MYSQL"
    ]
};

export const education = {
    heading: "Education",
    EducationList: [
        {
            Institute: "Vellore Institute of Technology, Vellore",
            Degree: "B.Tech Computer Science and Engineering",
            Duration:"2017-2021",
            Marks:"9.36 (CGPA)",
            logo:VIT
        }, {
            Institute: "Dayanand Anglo Vedic School",
            Degree: "Senior Secondary Education",
            Duration:"2015-2017",
            Marks:"89%",
            logo:DAV
        }, {
            Institute: "Ramakrishna Mission English School",
            Degree: "Secondary Education",
            Duration:"2003-2015",
            Marks:"86%",
            logo:RKMS
         }
    ]
}

export const projects = {
    heading: "Projects",
    projectList: [
        {
            name: "Doctor Door",
            description: "This is a web application having features of Finding the nearest hospitals, help in booking appointment with the doctors online.",
            technologies:["NodeJS",
                          "HTML",
                          "MongoDB",
                          "Bootstrap"]
        }, {
            name: "Receipe Finder",
            description: "The product is a real-time web application used to find the receipe related to any picture of fruit or vegetable clicked from the application",
            technologies:["NodeJS", "MongoDB"]
        }, {
            name: "Todo List Web Application",
            description: "This is a web application prepared for learning purpose having features to add, update, delete the employee from the Application",
            technologies:["SpringBoot","Hibernate"]
        }, {
            name: "Bulk Emailer",
            description: "This Project was made as my internship project allowing the user to prepare their own mailing list and send mail to all people in the mailing list at one click",
            technologies:["PHP","HTML","BOOTSTRAP","MYSQL"]
        }
    ]
}
class App extends React.Component{
    constructor(){
        super();
        
        this.state={
            currentSection: "",
			currentHeading: "",
			about: null,
			skills: null,
			projects: null,
			education:null,
        };
    }
    componentWillMount(){
        this.setState({
            about,
			skills,
			projects,
			education,
			currentHeading: about.heading,
			currentSection: "about"
        });
    }
    handleEvent =  (section) => {
		this.setState({
			currentSection: section,
			currentHeading: this.state[section].heading
		})
	}
    render(){
        return(
            <div className="App">
            <Portfolio
            handleEvent={this.handleEvent}
            currentSection={this.state.currentSection}
            currentHeading={this.state.currentHeading}
            about={this.state.about}
            skills={this.state.skills}
            projects={this.state.projects}
            education={this.state.education}
            />
            </div>
        );
    }
}
export default App;