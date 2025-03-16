// import React, { useCallback, useState } from "react";
// import { Items } from "./items";
// const SearchFilter = () => {
//   const [data, setData] = useState("");
//   const [showApi, setShowApi] = useState(0);

//   const handleChange = (e) => {
//     setData(e.target.value);
//     debouncedGetApi();
//   };

//   const filteredItem = Items.filter((item) =>
//     item.toLowerCase().includes(data.toLowerCase())
//   );
//   const getApi = () => {
//     setShowApi((prev) => prev + 1);
//   };
//   //clear time out- it means suppose once a timer started for 1 Sec
//   //and in between another time debounce function invoked
//   //then to reset the previous timer that was 5, which might have
//   //become 3 or 4 by that time, to clear that and set a new timer always
//   //when debounce function invoked.
//   const debounceFunction = function (fn, delay) {
//     let timer;
//     return function () {
//       let context = this,
//         args = arguments;

//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, delay);
//     };
//   };

//   const debouncedGetApi = useCallback(debounceFunction(getApi, 500), []);

//   return (
//     <>
//       <h1>Search Filter</h1>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="enter items"
//         value={data}
//       />
// //        {filteredItem.length > 0 ? (
//         filteredItem.map((item, id) => (
//             <ul key={id}>
//               <li>{item}</li>
//             </ul>
//           ))
//         ) : (
//           <p>Item does not exist</p>
//         )}
//       <p>Fetching Data....{showApi}</p>
//     </>
//   );
// };
// export default SearchFilter;
