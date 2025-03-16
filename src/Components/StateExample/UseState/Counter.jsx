// Counter.js
import React, { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <div className="counter-container">
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={handleCount}>-</button>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
    </div>
  );
};

export default Counter;
