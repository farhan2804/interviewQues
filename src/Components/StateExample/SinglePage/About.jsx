import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>This is about</h1>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/contact">Contact Page</NavLink>
    </>
  );
};

export default About;
