import React, { useState } from "react";

const MultipleState = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <h1>Name is {name}</h1>
      <h2>Password is {password} </h2>
      <h3> Email id is {email}</h3>
      <input
        onChange={handleName}
        placeholders="enter your name"
        type="text"
        value={name}
      />
      <br/>
      <input
        onChange={handlePassword}
        password="enter your password"
        type="password"
        value={password}
      />
      <br/>
      <input
        onChange={handleEmail}
        placeholders="enter your email"
        type="email"
        value={email}
      />
    </>
  );
};
export default MultipleState;
