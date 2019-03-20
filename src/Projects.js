import React from 'react';
import ProjectList from './ProjectList';
import './Projects.css';

class Projects extends React.Component {
  componentDidMount() {
    document.body.classList.remove("home-selected");
    document.body.classList.add("portfolio-selected");
    document.body.classList.remove("contact-selected");
  }
  
  render() {
    return(
      <div className="container fade-in">
        <h1>Projects</h1>
        <h5>(more on the way!)</h5>
        <ProjectList/>
      </div>
    );
  }
}



export default Projects;
