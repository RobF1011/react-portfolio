import React from 'react';
import './Home.css';

// const Home = () => (
//   <div className="container fade-in">
//     <h1>Home</h1>
//     <p>text text text blah blah</p>
//   </div>
// )

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add("home-selected");
    document.body.classList.remove("portfolio-selected");
    document.body.classList.remove("contact-selected");
  }
  
  render() {
    return(
      <section id="home">
        <div className="container fade-in center">
          <div className="circle">
            <img src="https://robf.dev/img/rob_japan.jpg" alt="Rob Franceschini"/>
          </div>
          <p>Hi, I'm Rob, a full stack web developer that loves building things for the web! I have great experience with tons of amazing technologies including:</p> 
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>ASP</li>
              <li>VB.NET</li>
              <li>SQL</li>
              <li>WordPress</li>
              <li>Shopify (Liquid)</li>
              <li>Adobe Creative Suite</li>
              <li>and more!</li>
            </ul>
            <p>Check out the Projects tab for some of my latest projects, but many more are available to show privately. Be sure to also take a look at my GitHub, CodePen, LinkedIn via the icons up top!</p>
        </div>
      </section>
    );
  }
}


export default Home;
