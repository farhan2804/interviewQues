import React, { useState } from "react";
import "./SearchFilter.css";
const SearchFilter = () => {
  const [searchedQuery, setSearchQuery] = useState("");
  const items = [
    "Apple",
    "orange",
    "Mango",
    "Kiwi",
    "Guava",
    "Grapes",
    "Papaya",
    "lemon",
  ];
  const filteredItem = items.filter((item) =>
    item.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  return (
    <>
      <div className="filterContainer">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Fruits"
          value={searchedQuery}
        />
        <ul>
          {filteredItem.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchFilter;
