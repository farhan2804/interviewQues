// import React, { useState, useCallback } from 'react';
// import Child from './Child';

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   console.log('Parent component rendered');

//   // Using useCallback to memoize the function
//   const increment = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []); // Empty dependency array means this function is memoized and won't be recreated on each render

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <Child onIncrement={increment} />
//     </div>
//   );
// };

// export default Parent;
