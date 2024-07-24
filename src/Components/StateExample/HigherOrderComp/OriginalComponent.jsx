import React from "react";

const OriginalComponent = ({ toggle, handletoggle }) => {
  return (
    <>
      <h1>toggle is {toggle ? "On" : "Off"}</h1>
      <button onClick={handletoggle}> Toggle</button>
    </>
  );
};

export default OriginalComponent;
