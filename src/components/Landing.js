import React from 'react';
import WorkTile from '../containers/WorkTile_Container';
import LifeTile from '../containers/LifeTile_Container';
// import Staticphoto from '../containers/Staticphoto_Container';

const Landing = () => (
  <div className="landingcontainer panels">
    <div className="landing">
      {/* <Staticphoto index="0"/> */}
      <div className="landingworkcontainer">
        <div className="landingworktitlecontainer">
          <h2 className="landingworktitle"> FEATURED WORKS: </h2>
        </div>
        <div className="landingworkbodycontainer">
          <WorkTile className="worktile1" index="0" boolean="true"/> <WorkTile className="worktile2" index="1" boolean="true"/> 
          <WorkTile className="worktile3" index="2" boolean="true"/> <WorkTile className="worktile4" index="3" boolean="true"/>
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
          <LifeTile className="lifetile1 tall" index="0" boolean="true"/> <LifeTile className="lifetile2 standard" index="1" boolean="true"/> 
          <LifeTile className="lifetile3 standard" index="2" boolean="true"/> <LifeTile className="lifetile4 standard" index="3" boolean="true"/> 
          <LifeTile className="lifetile5 standard" index="4" boolean="true"/> <LifeTile className="lifetile6 box" index="5" boolean="true"/> 
          <LifeTile className="lifetile7 standard" index="6" boolean="true"/> <LifeTile className="lifetile8 standard" index="7" boolean="true"/>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;