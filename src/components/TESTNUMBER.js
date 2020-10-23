import React from "react";

const TESTNUMBER = ({testNumbers, handleClick}) => (
  <h2 onClick={handleClick}>
    {testNumbers}
  </h2>
)

export default TESTNUMBER;