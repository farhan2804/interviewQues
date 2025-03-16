// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [formattedTime, setFormattedTime] = useState("00:00");
//   const [timerValue, setTimerValue] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);
//   const [endTimerMessage, setEndTimerMessage] = useState("");

//   useEffect(() => {
//     // Format the display time whenever timerValue changes
//     const minutes = Math.floor(timerValue / 60);
//     const seconds = timerValue % 60;
//     setFormattedTime(
//       `${minutes.toString().padStart(2, "0")}:${seconds
//         .toString()
//         .padStart(2, "0")}`
//     );
//   }, [timerValue]);

//   const handleChange = (e) => {
//     const value = parseInt(e.target.value) * 60 || 0;
//     setTimerValue(value);
//   };

//   const startTimer = () => {
//     if (!intervalId && timerValue > 0) {
//       const interval = setInterval(() => {
//         setTimerValue((prevValue) => {
//           if (prevValue <= 1) {
//             clearInterval(interval);
//             setIntervalId(null);
//             setEndTimerMessage("Time Up !!!");
//             // Stop the interval when timer reaches 0
//             return 0;
//           }
//           return prevValue - 1;
//         });
//       }, 1000);
//       setIntervalId(interval); // Save the interval ID
//     }
//   };

//   const stopTimer = () => {
//     if (intervalId) {
//       clearInterval(intervalId);
//       setIntervalId(null);
//     }
//   };

//   return (
//     <>
//       <h1> Timer</h1>
//       <h1>{formattedTime}</h1>
//       <input onChange={handleChange} type="text" placeholder="Minutes" />
//       <button onClick={startTimer}> Start </button>
//       <button onClick={stopTimer}> Stop </button>
//       <h1>{endTimerMessage}</h1>
//     </>
//   );
// };

// export default Timer;
