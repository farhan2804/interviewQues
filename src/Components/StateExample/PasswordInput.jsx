import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleState = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="password-container">
        <input
          type={showPassword?"text":"password"}
          placeholder="Enter your Password"
          className="password-input"
        />

        <button onClick={toggleState} className="toggle-button">
         {showPassword? "🙈":"👁️"}
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
