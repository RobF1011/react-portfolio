import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => (
    <header>
      <div className="container">
        <h2>Rob Franceschini</h2>
        <div className="icons">
          <a href="https://www.linkedin.com/in/robfranceschini/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/RobF1011/" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </header>
)



export default Header;