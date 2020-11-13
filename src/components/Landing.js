import React from 'react';
import FeaturedTile from './FeaturedTile';

const Landing = () => (
  <div className="landingcontainer panels">
    <div className="landing">
      <div className="landingworkcontainer">
        <div className="landingworktitlecontainer">
          <h2 className="landingworktitle"> FEATURED WORKS: </h2>
        </div>
        <div className="landingworkbodycontainer">
          <FeaturedTile />
          <FeaturedTile />
          <FeaturedTile />
          <FeaturedTile />
        </div>
      </div>
      <div className="landingblurbcontainer">
        <div className="landingblurbspancontainer">
          <span className="landingblurb">Nam mattis volutpat posuere. Nulla facilisi. Nullam ultrices semper neque, consequat elementum tortor. Nullam egestas quis dolor vitae elementum. Integer sed ipsum dignissim, imperdiet nisi ac, fringilla mauris. Suspendisse aliquet sem vitae mattis gravida. Donec vitae augue sed dui pretium scelerisque vel vitae elit. Aliquam erat volutpat.
          </span>
        </div>
      </div>
      <div className="landinglifecontainer">
        <div className="landinglifetitlecontainer">
          <h2 className="landinglifetitle"> FEATURED BLOGS: </h2>
        </div>
        <div className="landinglifebodycontainer">
          {/* import life tiles here className="landinglifebody"*/}
        </div>
      </div>
    </div>
  </div>
)

export default Landing;