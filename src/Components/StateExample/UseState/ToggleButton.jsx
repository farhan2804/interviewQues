import React, { useState } from "react";

const ToggleButton = () => {
  const [toggleState, setToggleState] = useState(false);
  const handleClick = () => {
    setToggleState(!toggleState);
  };
  return (
    <>
      {toggleState ? (
        <h1>Current state is Off</h1>
      ) : (
        <h1>Current state is On</h1>
      )}
      <button onClick={handleClick}> Toggle the State</button>
    </>
  );
};

export default ToggleButton;
