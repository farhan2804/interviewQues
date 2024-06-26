import React, { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);

  return (
    <>
      <h1> Count value is {data}</h1>
      <button onClick={() => setData(data + 1)}>+</button>
      <button onClick={() => setData(data - 1)}>-</button>
    </>
  );
};

export default Counter;
