import React, { useState } from "react";

function HigherOrder(WrappedComponent) {
  return function newComponent() {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
      setToggle(!toggle);
    };
    return <WrappedComponent toggle={toggle} handletoggle={handleToggle} />;
  };
}
export default HigherOrder;
