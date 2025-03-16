// import React, { useState } from "react";
// import "./StarRating.css";
// const StarRating = () => {
//   const [rating, SetRating] = useState(0); // when stars will be clicked,locked rating
//   const [hover, setHover] = useState(0); //this will be used for hovering

//   const activeRating = Math.max(rating, hover);

//   const handleClick = (id) => {
//     // console.log('id of the star being clicked', id);
//     SetRating(id + 1);
//   };

//   const handleMouseEnter = (id) => {
//     setHover(id + 1);
//   };

//   const handleReset = () => {
//     SetRating(0);
//     setHover(0);
//   }

//   const handleMouseLeave = () => {
//     setHover(0);
//   }
//   return (
//     <>
//       <h1> Star Rating</h1>
//       <div onMouseLeave={handleMouseLeave}>
//         {[...Array(5)].map((_, id) => (
//           <button
//           type="button"
//             key={id}
//             onClick={() => handleClick(id)}
//             onMouseEnter={() => handleMouseEnter(id)}
//             id="starButton"
//             className={
//               id < activeRating ? "colored" : "uncolored"}
//           >&#9733;</button>
//         ))}
//       </div>
//       <button onClick={handleReset}>Reset Rating</button>
//     </>
//   );
// };

// export default StarRating;
