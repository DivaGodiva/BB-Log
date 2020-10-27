import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="headercontainer">
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src="/assets/profile-buns.jpg" alt="YAS" />
      </div>
      <a href="/">
        <div className="bblogcontainer">
          <span className="bblog">B: BLOG</span>
        </div>
      </a>
      <div className="linkscontainer">
        <Link className="links" to="/workblog">WORK</Link>
        <span> | </span>
        <Link className="links" to="/lifeblog">LIFE</Link>
        <span> | </span>
        <Link className="links rightspacing" to="/contact">CONTACT</Link>
      </div>
    </div>
  </div>
)

export default Header;