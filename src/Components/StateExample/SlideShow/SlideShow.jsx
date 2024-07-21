import React, { useState } from "react";
import { data } from "./SlideShowData";
const SlideShow = () => {
  const [index, setIndex] = useState(0);

  const prevDisabled = index === 0;
  const nextDisabled = index === data.length - 1;
  const restartDisabled = index === 0;
  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrevious = () => {
    setIndex(index - 1);
  };
  const handleRestart = () => {
    setIndex(0);
  };
  return (
    <>
      <h1>{data[index].name}</h1>
      <h3>{data[index].kaam}</h3>
      <button onClick={handleNext} disabled={nextDisabled}>
        Next
      </button>
      <button onClick={handlePrevious} disabled={prevDisabled}>
        Previous
      </button>
      <button onClick={handleRestart} disabled={restartDisabled}>
        Restart
      </button>
    </>
  );
};

export default SlideShow;
