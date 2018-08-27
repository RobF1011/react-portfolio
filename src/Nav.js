import React from 'react';
import { Link } from 'react-router-dom'

import './Nav.css';

// const Header = () => (
//     <nav>
//         <Link to='/'><i className="fas fa-home"></i><div className="circle"></div></Link>
//         <Link to='/projects'><i className="fas fa-briefcase"></i><div className="circle"></div></Link>
//         <Link to='/contact'><i className="fas fa-envelope"></i><div className="circle"></div></Link>
//     </nav>
// )

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationName1: '',
      animationName2: '',
      animationName3: ''
    };
  }

  clickHdl1() {
    console.log("click");
    let styleSheet = document.styleSheets[0];
 
    let animationName = `animation${Math.round(Math.random() * 100)}`;
    
    let keyframes =
    `@-webkit-keyframes ${animationName} {
        0% {transform: translatex(-50%)scale(1);opacity: 0;}
        20% {opacity: 1;}
        80% {opacity: 1;}
        100% {transform: translatex(-50%)scale(1.7);opacity: 0;}
    }`;
 
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    this.setState({
      animationName1: animationName
    });
  }

  clickHdl2() {
    let styleSheet = document.styleSheets[0];
 
    let animationName = `animation${Math.round(Math.random() * 100)}`;
    
    let keyframes =
    `@-webkit-keyframes ${animationName} {
        0% {transform: translatex(-50%)scale(1);opacity: 0;}
        20% {opacity: 1;}
        80% {opacity: 1;}
        100% {transform: translatex(-50%)scale(1.7);opacity: 0;}
    }`;
 
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    this.setState({
      animationName2: animationName
    });
  }

  clickHdl3() {
    let styleSheet = document.styleSheets[0];
 
    let animationName = `animation${Math.round(Math.random() * 100)}`;
    
    let keyframes =
    `@-webkit-keyframes ${animationName} {
        0% {transform: translatex(-50%)scale(1);opacity: 0;}
        20% {opacity: 1;}
        80% {opacity: 1;}
        100% {transform: translatex(-50%)scale(1.7);opacity: 0;}
    }`;
 
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    this.setState({
      animationName3: animationName
    });
  }

  
  render() {
    let style = {
      animationName: this.state.animationName1,
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.3s',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards'
    };
    let style2 = {
      animationName: this.state.animationName2,
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.3s',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards'
    };
    let style3 = {
      animationName: this.state.animationName3,
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.3s',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards'
    };
    return(
      <nav>
        <Link to='/' onClick={this.clickHdl1.bind(this)}><i className="fas fa-home"></i><div className="circle" style={style}></div></Link>
        <Link to='/projects' onClick={this.clickHdl2.bind(this)}><i className="fas fa-briefcase"></i><div className="circle" style={style2}></div></Link>
        <Link to='/contact'  onClick={this.clickHdl3.bind(this)}><i className="fas fa-envelope"></i><div className="circle" style={style3}></div></Link>
      </nav>
    );
  }
}

export default Nav;