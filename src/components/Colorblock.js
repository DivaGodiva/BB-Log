import React from 'react';

const Colorblock = ({headerIndex, headerToggles, landingMessage, messageuno, messagedos}) => (
  <div className="colorblockcontainer">
    <div className="colorblockimagecontainer cont1">
      <img className="colorblockimage" src="/assets/beachboi.jpeg" alt="yas"></img>
    </div>
    <div className="colorblock cont1">
      <div className="messagecontainer">
        <div className="messagestack">
          <h2 className="message uno">{headerToggles[headerIndex] ? messageuno[headerIndex] : Object.keys(landingMessage)[0]}</h2>
        </div>
        <div className="messagestack">
          <h2 className="message dos">{headerToggles[headerIndex] ? messagedos[headerIndex] : Object.values(landingMessage)[0]}</h2>
        </div>
      </div>
    </div>
  </div>
)

export default Colorblock;