import React from 'react';

const FeaturedTile = () => (
  <div className="featuredtilecontainer">
    <div className="featuredtileimagecontainer">
      <a className="featuredlink"href="https://www.w3schools.com">
        <img className="featuredtileimage" src="/assets/dummy-photo.jpg" alt="yas"></img>
      </a>
    </div>
    <div className="featuredtiletitle">
      <h2>title</h2>
    </div>
  </div>
)

export default FeaturedTile;