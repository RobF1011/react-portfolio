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
          <img src="https://robf.me/img/rob.jpg"/>
          <p>Hi, I'm Rob, and I love building things for the web! I have great experience with tons of amazing technologies including:</p> 
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>ASP</li>
              <li>.NET</li>
              <li>VBScript</li>
              <li>WordPress</li>
              <li>Shopify</li>
              <li>Adobe Creative Suite</li>
              <li>and more!</li>
            </ul>
          <p>This site is under construction, but in the meantime take a look at some of my recent work and feel free to drop me a line!</p>
        </div>
      </section>
    );
  }
}


export default Home;
