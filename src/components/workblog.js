import React from 'react';
import WorkTile from '../containers/WorkTile_Container';

const Workblog = () => (
  <div className="workblogcontainer panels">
    <div className="workblog">
      <div className="workblogtitlecontainer">
        <h2 className="workblogtitle"> ALL WORKS </h2>
      </div>
      <div className="workblogbodycontainer">
        <WorkTile className="worktile1" index="0"/> <WorkTile className="worktile2" index="1"/> 
        <WorkTile className="worktile3" index="2"/> <WorkTile className="worktile4" index="3"/>
        <WorkTile className="worktile5" index="4"/> <WorkTile className="worktile6" index="5"/>
        <WorkTile className="worktile7" index="6"/> <WorkTile className="worktile8" index="7"/>
      </div>
    </div>
  </div>
)

export default Workblog;