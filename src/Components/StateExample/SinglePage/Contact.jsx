import React from "react";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <h1>This is Contact</h1>
      <NavLink to="/">Home Page</NavLink>
      <br/>
      <NavLink to="/about">About Page</NavLink>
    </>
  );
};

export default Contact;
