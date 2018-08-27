import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route path='/projects/:projectslug' render={(props) => <ProjectDetails {...props} projectSlug={props.match.params.projectslug} />} />
      <Route path='/projectdetails' component={ProjectDetails}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)
export default Main;
