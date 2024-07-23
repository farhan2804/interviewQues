import React, { useState, useEffect } from "react";

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  return (
    <>
      <h1> Chats {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default DocumentTitle;
