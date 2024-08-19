import React, { useState } from "react";
import { MainData, SubData } from "./data";
import "./Accordion.css";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };
  return (
    <>
      <h1> Accordion </h1>
      <div className="accordionContainer">
        {MainData.map((data, id) => (
          <div className="sec">
            <h1>{data}</h1>

            <button onClick={() => handleClick(id)}>
              {activeIndex === id ? "⬆️" : "⬇️"}
            </button>
            {activeIndex === id && <p>{SubData[id]}</p>}
          </div>
        ))}
      </div>
    </>
  );
};
export default Accordion;
