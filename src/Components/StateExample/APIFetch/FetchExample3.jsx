// import React from "react";
// import "./FetchStyle.css";
// import useFetch from "./useFetch";
// const FetchExample3 = () => {
//   const { data, isDataFetched, error } = useFetch(
//     "https://api.escuelajs.co/api/v1/products"
//   );
//   return (
//     <div className="container">
//       <h1>Fetched Data from dummyJSON</h1>
//       {isDataFetched ? (
//         error ? (
//           <p>Error:{error}</p>
//         ) : (
//           data.map((val, id) => (
//             <div key={id}>
//               <h4>{id + 1}</h4>
//               <h2>{val.title}</h2>
//             </div>
//           ))
//         )
//       ) : (
//         <p> Loading ..... </p>
//       )}
//     </div>
//   );
// };

// export default FetchExample3;
