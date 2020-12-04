import React from 'react';

const WorkTile = ({ className, index, boolean, workPhotoArray, workPhotoLinks, workArray, workLinks }) => (
  <div className={`worktilecontainer ${className}`}>
    <div className="worktileimagecontainer">
      <a className="worklink" href={boolean ? workPhotoLinks[index] : workLinks[index]}>
        <img className="worktileimage" src={boolean ? workPhotoArray[index] : workArray[index]} alt="yas"></img>
      </a>
    </div>
    <div className="worktiletitle">
      <h2>title</h2>
    </div>
  </div>
)

export default WorkTile;

//ADD BOOLEAN CLAUSE