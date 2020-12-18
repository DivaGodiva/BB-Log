import React from 'react';
import LifeTile from '../containers/LifeTile_Container';

const Lifeblog = () => (
  <div className="lifeblogcontainer panels">
    <div className="lifeblog">
      <div className="lifeblogtitlecontainer">
        <h2 className="lifeblogtitle"> BLOGS </h2>
      </div>
      <div className="lifeblogbodycontainer">
        <LifeTile className="lifetile1 tall" index="0"/> <LifeTile className="lifetile2 standard" index="1"/> 
        <LifeTile className="lifetile3 standard" index="2"/> <LifeTile className="lifetile4 standard" index="3"/> 
        <LifeTile className="lifetile5 standard" index="4"/> <LifeTile className="lifetile6 box" index="5"/> 
        <LifeTile className="lifetile7 standard" index="6"/> <LifeTile className="lifetile8 standard" index="7"/>
      </div>
    </div>
  </div>
)

export default Lifeblog;