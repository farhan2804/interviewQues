// import React, { useState } from "react";
// import "./SearchFilter.css";
// import fruits from "./items";
// const SearchFilter = () => {
//   const [searchedQuery, setSearchedQuery] = useState("");
//   //  console.log(searchedQuery);

//   const filteredItems = fruits.filter((item) =>
//     item.toLowerCase().includes(searchedQuery.toLowerCase())
//   );

//   return (
//     <div className="filterContainer">
//       <h1>Fruit Search Filter</h1>

//       <input
//         type="text"
//         onChange={(event) => setSearchedQuery(event.target.value)}
//         value={searchedQuery}
//         placeholder="Type to Search Fruits.."
//       />

//       <ul>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, id) => <li key={id}> {item}</li>)
//         ) : (
//           <li className="noResults">No Fruits Found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchFilter;
