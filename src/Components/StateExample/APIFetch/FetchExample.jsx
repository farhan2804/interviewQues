// import { useState, useEffect } from "react";
// import "./FetchStyle.css";
// const FetchExample = () => {
//   const [data, setData] = useState([]);
//   //track the data being fetched or not
//   const [isDataFetched, setIsDataFetched] = useState(false);

//   useEffect(() => {
//     //data fetch logic
//     const fetchData = async () => {
//       try {
//         const responseObj = await fetch("https://jsonplaceholder.typicode.com/todos");
//         console.log(responseObj);

//         const jsObject = await responseObj.json();
//         console.log(jsObject);
//       } 
//       catch (err) {
//    console.log("Error:", err);
//       } 
//        finally {
        
//       }


      
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       {/* {isDataFetched ? (
//         error ? (
//           <p> Error: {error}</p>
//         ) : (
//           data.map((val, id) => (
//             <div key={id}>
//               <h4>{id + 1}</h4>
//               <h2>{val.name}</h2>
//             </div>
//           ))
//         )
//       ) : (
//         <p> Loading.....</p>
//       )} */}
//     </div>
//   );
// };

// export default FetchExample;
