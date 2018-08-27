import React, { Component } from 'react';
import data from './data/projects.json'

class ProjectDetail extends Component {

constructor() {
 super();
 this.state = {
   project: {},
   isLoading: true
 };
}

componentWillMount() {


        const project = data.find( project => project.slug === this.props.projectSlug );

        this.setState({ project: project });

        this.setState({ isLoading: false })

}

render() {
  return (
    this.state.isLoading ?
    <section className="container fade-in" id="projectDetail">
      Loading...
    </section>

    :

    <section className="container fade-in" id="projectDetail">
      <div>
        <h2>{this.state.project.name}</h2>
        <p>{this.state.project.description}</p>
        <p>{this.state.project.githubLink}</p>
        <img alt={this.state.project.name} src={this.state.project.thumbnail}/>
      </div>
    </section>
  );
}

}

export default ProjectDetail;