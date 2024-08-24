import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Progress Bar</h1>
      <div className="container">
        <span style={{ width: `${progress}%` }}>{progress}%</span>
      </div>
    </>
  );
};

export default ProgressBar;
