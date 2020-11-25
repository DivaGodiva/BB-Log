import React from 'react';

const WorkTile = ({ className }) => (
  <div className={`worktilecontainer ${className}`}>
    <div className="worktileimagecontainer">
      <a className="worklink"href="https://www.w3schools.com">
        <img className="worktileimage" src="/assets/dummy-photo.jpg" alt="yas"></img>
      </a>
    </div>
    <div className="worktiletitle">
      <h2>title</h2>
    </div>
  </div>
)

export default WorkTile;