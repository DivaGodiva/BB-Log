import React from 'react';
import WorkTile from './WorkTile';
import LifeTile from './LifeTile';

const Landing = () => (
  <div className="landingcontainer panels">
    <div className="landing">
      <div className="landingworkcontainer">
        <div className="landingworktitlecontainer">
          <h2 className="landingworktitle"> FEATURED WORKS: </h2>
        </div>
        <div className="landingworkbodycontainer">
          <WorkTile className="worktile1"/> <WorkTile className="worktile2"/> 
          <WorkTile className="worktile3"/> <WorkTile className="worktile4"/>
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
          <LifeTile className="lifetile1"/> <LifeTile className="lifetile2"/> 
          <LifeTile className="lifetile3"/> <LifeTile className="lifetile4"/> 
          <LifeTile className="lifetile5"/> <LifeTile className="lifetile6"/> 
          <LifeTile className="lifetile7"/> <LifeTile className="lifetile8"/>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;