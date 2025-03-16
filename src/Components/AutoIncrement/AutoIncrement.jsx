// import React, { useState, useEffect } from "react";
// import "./AutoIncrement.css";

// const AutoIncrement = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let interval = setInterval(() => {
//       setCount((prevValue) => {
//         if(prevValue < 10 ){
//          return prevValue +1;
//         }
//         else {
//           clearInterval(interval);
//           return prevValue;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <>
//       <div className="container">
//         <h1>Auto Increment Counter</h1>
//         <p className="counter">{count}</p>
//       </div>
//     </>
//   );
// };

// export default AutoIncrement;
