import React from 'react';

const Staticphoto = ({ staticPhotoArray, index }) => (
  <div className="staticphotocontainer panels" id="staticy">
    <div className="staticphoto">
      <img className="staticphotoimage" src={staticPhotoArray[index]} alt="yas"></img>
    </div>
  </div>
)

export default Staticphoto;