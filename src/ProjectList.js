import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import data from './data/projects.json'

class ProjectList extends Component {

constructor() {
 super();
 this.state = {
   projectList: [],
   isLoading: true
 };
}

componentDidMount() {

        let projects = data.map((project) => {
            return (
              // <Link key={project.slug} to={`/projects/${project.slug}`}>
                <article key={project.name}>
                    <a href={project.githubLink} target="_blank"><h2>{project.name}</h2></a>
                    <p className="skills">Skills used: {project.skills}</p>
                    <p>{project.description}</p>
                    <img alt="" src={project.thumbnail ? project.thumbnail : 'https://robf.dev/img/no-preview.jpg'}/>
                    <div className="link-icons">
                      <a href={project.githubLink} target="_blank"><i className="fab fa-github"></i></a>
                      {project.previewLink ? <a href={project.previewLink} target="_blank"><i className="far fa-eye"></i></a> : ''}
                    </div> 
                </article>
              // </Link>
            )
        })
        this.setState({ projectList: projects });
        this.setState({ isLoading: false })


}

render() {
  return (
    this.state.isLoading ?
    <section id="projects">
      Loading...
    </section>

    :

    <section id="projects">
      {this.state.projectList}
    </section>
  );
}

}

export default ProjectList;