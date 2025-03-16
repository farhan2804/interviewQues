import React,{useState} from 'react'
import "./SlideShow.css";
import {data} from './SlideShowData';

const SlideShow = () => {
    const [index, setIndex] = useState(0);

    const restartDisable = index === 0;
    const previousDisbale = index === 0;
    const nextDisable = index === data.length - 1; //5 -1 = 4


    const handleRestart = () => {
        setIndex(0);
    }

    const handlePrevious = () => {
        setIndex(index - 1);
    }
    const handleNext = () => {
        setIndex(index + 1);
    }
  return (
   <div className='slideshowContainer'>
    <h1>{data[index].name}</h1>
    <p>{data[index].detail}</p>
    <div className="buttonsContainer">
        <button className="btn" onClick={handleRestart} disabled={restartDisable}>Restart</button>
        <button className="btn" onClick={handlePrevious} disabled={previousDisbale}>Previous</button>
        <button className="btn" onClick={handleNext} disabled = {nextDisable}>Next</button>
    </div>
   </div>
  )
}

export default SlideShow