import React from 'react';

const Footer = () => (
  <div className="footercontainer panels">
    <div className="footer">
      <div className="socialscontainer">
        <a className="socials" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a className="socials" href="https://github.com/DivaGodiva" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a className="socials" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <div className="copyrightcontainer">
        <h2 className="copyright">Created by me © 2020 GodivanBuns</h2>
      </div>
    </div>
  </div>
)

export default Footer;