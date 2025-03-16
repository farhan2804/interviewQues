// import React,{useState} from 'react'
// import { MainData,SubData } from './data';
// import "./Accordion.css";
// const Accordion = () => {
//   const [activeField,setActiveField]= useState(null);

//   const handleClick = (id) => {
//      console.log(id);
//      setActiveField(activeField === id ? null : id);
//   }
//   return (
//     <>
//     <h2>Accordion</h2>
//       {MainData.map((data,id)=> (
//         <div className="accordionContainer" key={id}>
//               <h1>{data}</h1>
//               <button onClick={()=> handleClick(id)}>{activeField === id ? "-" :"+"}</button>
//               {activeField === id && <p>{SubData[id]}</p>}
//         </div>

//       ))}
//     </>
//   )
// }

// export default Accordion