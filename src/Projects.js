import React from 'react';
import ProjectList from './ProjectList';
import './Projects.css';

// const Projects = () => (
//   <div className="container fade-in">
//     <h1>Projects</h1>
//     <p>Here are my projects</p>
//     <ProjectList/>
//   </div>
// )

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
        <ProjectList/>
      </div>
    );
  }
}



export default Projects;
