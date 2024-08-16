import React, { useState } from "react";

const PasswordEncrypt = () => {
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleState = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <h1>Password Encryption</h1>

      <input
        type={isHidden ? "text" : "password"}
        onChange={handlePassword}
        value={password}
        name="password"
      />
      <button onClick={toggleState}>{isHidden ? "Hide" : "Show"}</button>
    </>
  );
};

export default PasswordEncrypt;
