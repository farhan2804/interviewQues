import React, { useState } from "react";

const Todo = () => {
  const [data, addData] = useState("");
  const [value, setValue] = useState([]);
  const handleChange = (e) => {
    addData(e.target.value);
  };
  const handleClick = () => {
    setValue([...value, data]);
    addData("");
  };

  const handleDelete = (id) => {
    setValue(value.filter((item, index) => index != id));
  };
  return (
    <>
      <h1> Todo List</h1>
      <input
        type="text"
        placeholder="add Items"
        onChange={handleChange}
        value={data}
      />
      <button onClick={handleClick}>+</button>
      {value.map((val, id) => (
        <li key={id}>
          {val}
          <button onClick={() => handleDelete(id)}>x</button>
        </li>
      ))}
    </>
  );
};

export default Todo;
