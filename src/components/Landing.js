import React from 'react';

const Landing = () => (
  <div className="landing panels">
    <div className="landingworkcontainer">
      <div className="landingworktitlecontainer">
        <h2 className="landingworktitle"> Featured Work</h2>
      </div>
      <div className="landingworkbodycontainer">
        {/* import work tiles here className="landingworkbody"*/}
      </div>
    </div>
    <div className="landingblurbcontainer">
      <span className="landingblurb"> Blurb </span>
    </div>
    <div className="landinglifecontainer">
      <div className="landinglifetitlecontainer">
        <h2 className="landinglifetitle"> Featured Life</h2>
      </div>
      <div className="landinglifebodycontainer">
        {/* import life tiles here className="landinglifebody"*/}
      </div>
    </div>
  </div>
)

export default Landing;