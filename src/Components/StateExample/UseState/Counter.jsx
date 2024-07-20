import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount= () =>{
    if(count >0){
        setCount(prevCount => prevCount-1);
    }
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> +</button>
      <button onClick={handleCount}>-</button>
    </>
  );
};

export default Counter;
