// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [isDataFetched, setIsDataFetched] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFunction = async () => {
//       try {
//         const responseObj = await fetch(url);
//         if (!responseObj.ok) throw new Error("Failed to Fetch Data");
//         const jsObject = await responseObj.json();
//         setData(jsObject);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsDataFetched(true);
//       }
//     };
//     fetchFunction();
//   }, []);
//   return { data, isDataFetched, error };
// };

// export default useFetch;
