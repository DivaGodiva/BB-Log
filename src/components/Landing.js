import React from 'react';
import WorkTile from '../containers/WorkTile_Container';
import LifeTile from '../containers/LifeTile_Container';

const Landing = () => (
  <div className="landingcontainer panels">
    <div className="landing">
      <div className="landingworkcontainer">
        <div className="landingworktitlecontainer">
          <h2 className="landingworktitle"> FEATURED WORKS: </h2>
        </div>
        <div className="landingworkbodycontainer">
          <WorkTile className="worktile1" index="0" boolean="false"/> <WorkTile className="worktile2" index="1" boolean="false"/> 
          <WorkTile className="worktile3" index="2" boolean="false"/> <WorkTile className="worktile4" index="3" boolean="false"/>
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
          <LifeTile className="lifetile1 tall" index="0"/> <LifeTile className="lifetile2 standard" index="1"/> 
          <LifeTile className="lifetile3 standard" index="2"/> <LifeTile className="lifetile4 standard" index="3"/> 
          <LifeTile className="lifetile5 standard" index="4"/> <LifeTile className="lifetile6 box" index="5"/> 
          <LifeTile className="lifetile7 standard" index="6"/> <LifeTile className="lifetile8 standard" index="7"/>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;