import React from 'react';
import './Contact.css';

// const Contact = () => (
//   <div className="container fade-in">
//     <h1>Contact</h1>
//     <p>Get in touch</p>
//   </div>
// )

class Contact extends React.Component {
  componentDidMount() {
    document.body.classList.remove("home-selected");
    document.body.classList.remove("portfolio-selected");
    document.body.classList.add("contact-selected");
  }
  
  render() {
    return(
      <section id="contact">
        <div className="container fade-in center">
          <h1>Contact</h1>
          <p>You can get in touch with me by email at:</p>
          <p><a href="mailto:robert.franceschini@gmail.com">robert.franceschini@gmail.com</a></p>
          <p>Or download my resume below!</p>
          <a href="https://robf.dev/resume/RFResume2019.pdf" target="_blank" rel="noopener noreferrer"><img src="https://robf.dev/img/RFResume2018.jpg" alt="Resume"/></a>
        </div>
      </section>
    );
  }
}


export default Contact;
