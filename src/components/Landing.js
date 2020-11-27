import React from 'react';
import WorkTile from '../containers/WorkTile_Container';
import LifeTile from './LifeTile';

const Landing = () => (
  <div className="landingcontainer panels">
    <div className="landing">
      <div className="landingworkcontainer">
        <div className="landingworktitlecontainer">
          <h2 className="landingworktitle"> FEATURED WORKS: </h2>
        </div>
        <div className="landingworkbodycontainer">
          <WorkTile className="worktile1" index="0"/> <WorkTile className="worktile2" index="1"/> 
          <WorkTile className="worktile3" index="2"/> <WorkTile className="worktile4" index="3"/>
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
          <LifeTile className="lifetile1 tall"/> <LifeTile className="lifetile2 standard"/> 
          <LifeTile className="lifetile3 standard"/> <LifeTile className="lifetile4 standard"/> 
          <LifeTile className="lifetile5 standard"/> <LifeTile className="lifetile6 box"/> 
          <LifeTile className="lifetile7 standard"/> <LifeTile className="lifetile8 standard"/>
        </div>
      </div>
    </div>
  </div>
)

export default Landing;