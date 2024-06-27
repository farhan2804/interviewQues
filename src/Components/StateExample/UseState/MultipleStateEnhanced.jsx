import React, { useState } from "react";

const MultipleStateEnhanced = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <>
      <h1>Name is {name}</h1>
      <h2>Password is {password} </h2>
      <h3> Email id is {email}</h3>
      <input
        onChange={handleChange}
        placeholders="enter your name"
        type="text"
        value={name}
        name="name"
      />
      <br/>
      <input
        onChange={handleChange}
        password="enter your password"
        type="password"
        value={password}
        name="password"
      />
      <br />
      <input
        onChange={handleChange}
        placeholders="enter your email"
        type="email"
        value={email}
        name="email"
      />
    </>
  );
};
export default MultipleStateEnhanced;
