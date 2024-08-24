import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0); // The locked rating when a star is clicked
  const [hover, setHover] = useState(0); // The current star being hovered

  const handleClick = (id) => {
    setRating(id + 1);
  };

  const handleMouseEnter = (id) => {
    setHover(id + 1);
  };

  const handleReset = () =>{
     setRating(0);
     setHover(0);
  }

  return (
    <>
      <h1>Star Rating</h1>
      <div className="mainContainer">
        {[...Array(5)].map((_, id) => (
          
          <button id="starButton"
            key={id}
            onClick={() => handleClick(id)}
            onMouseEnter={() => handleMouseEnter(id)}
            className={`fa-solid fa-star ${
              id < rating || (id < hover && hover > rating)
                ? "hovered"
                : "unclicked"
            }`}
          ></button>
          
         
        ))}
        
      </div>
      <button onClick={handleReset}>Reset Star</button>
    </>
  );
};

export default StarRating;
