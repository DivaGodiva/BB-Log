import React from 'react';

const LifeTile = ({ className, index, lifePhotoArray, lifePhotoLinks }) => (
  <div className={`lifetilecontainer ${className}`}>
    <div className="lifetileimagecontainer">
      <a className="lifelink" href={lifePhotoLinks[index]}>
        <img className="lifetileimage" src={lifePhotoArray[index]} alt="yas"></img>
      </a>
    </div>
    {/* <div className="lifetiletitle">
      <h2>title</h2>
    </div> */}
  </div>
)

export default LifeTile;