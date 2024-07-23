import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFucntion = async () => {
      try {
        const responseData = await fetch(url);
        if (!responseData.ok) {
            throw new Error("Network response was not ok");
          }
        const jsonData = await responseData.json();
        setData(jsonData);
      } catch (error) {
        console.log("error fetching the data");
      }
    };
    fetchFucntion();
  },[url]);
  return data;
    
  
};

export default useFetch;
