import React from "react";
import useFetch from "./useFetch";
const CustomHook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(data.title);
  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
    </>
  );
};

export default CustomHook;
