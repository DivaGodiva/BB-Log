import React from 'react';

const WorkTile = ({ className, index, workPhotoArray, workPhotoLinks }) => (
  <div className={`worktilecontainer ${className}`}>
    <div className="worktileimagecontainer">
      <a className="worklink" href={workPhotoLinks[index]}>
        <img className="worktileimage" src={workPhotoArray[index]} alt="yas"></img>
      </a>
    </div>
    <div className="worktiletitle">
      <h2>title</h2>
    </div>
  </div>
)

export default WorkTile;

//ADD BOOLEAN CLAUSE