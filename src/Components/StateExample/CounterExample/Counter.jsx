import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [number ,setNumber] = useState(0);
  const decrementCount = () => {
    setCount((prevValue) => prevValue - number);
  };

  const incrementCount = () => {
    setCount((prevValue) => prevValue + number);
  };
  const resetCount = () => {
    setCount(0);
  }

  const handleChange = (event) => {
    const userInput =parseInt( event.target.value);
    setNumber(userInput);
    console.log(typeof(userInput));
  }
return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <h1>Increment/decrement by :</h1>
      <input type="number" onChange={handleChange}/>
      <button onClick={resetCount}> Reset</button>
    </>
  );
};

export default Counter;
