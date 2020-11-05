import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({handleClick, handleMouseClick, headerToggles}) => (
  <div className="headercontainer panels">
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src="/assets/profile-buns.jpg" alt="YAS" />
      </div>
      <a className="bblogcontainerlink" href="/" onClick={handleMouseClick}>
        <div className="bblogcontainer">
          <span className="bblog">B: BLOG</span>
        </div>
      </a>
      <div className="linkscontainer">
        <Link className={`links ${headerToggles[0] ? "highlight" : ""}`} to="/workblog" onClick={() => handleClick(0)}>WORK</Link>
        <span className="separators"> | </span>
        <Link className={`links ${headerToggles[1] ? "highlight" : ""}`} to="/lifeblog" onClick={() => handleClick(1)}>LIFE</Link>
        <span className="separators"> | </span>
        <Link className={`links ${headerToggles[2] ? "highlight" : ""}`} to="/contact" onClick={() => handleClick(2)}>CONTACT</Link>
      </div>
    </div>
  </div>
)

export default Header;