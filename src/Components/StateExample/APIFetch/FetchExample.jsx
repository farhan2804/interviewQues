import React, { useState, useEffect } from "react";

const FetchExample = () => {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("error fetching of the data");
      } finally {
        setIsDataFetched(true);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {isDataFetched ? (
        data.map((val) => (
          <div key={val.id}>
            <h2>{val.id}. {val.title}</h2>
          </div>
        ))
      ) : (
        <p> Loading.....</p>
      )}
    </>
  );
};

export default FetchExample;
