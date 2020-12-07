import React from 'react';

const LifeTile = ({ className, index, boolean, lifePhotoArray, lifePhotoLinks, lifeArray, lifeLinks }) => (
  <div className={`lifetilecontainer ${className}`}>
    <div className="lifetileimagecontainer">
      <a className="lifelink" href={boolean ? lifePhotoLinks[index] : lifeLinks[index]}>
        <img className="lifetileimage" src={boolean ? lifePhotoArray[index] : lifeArray[index]} alt="yas"></img>
      </a>
    </div>
    {/* <div className="lifetiletitle">
      <h2>title</h2>
    </div> */}
  </div>
)

export default LifeTile;