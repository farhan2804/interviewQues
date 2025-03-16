import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';
const Home = () => {
  return (
    <>
      <h1>This is Home</h1>
      <NavLink to="/about">About Page</NavLink>
      <br/>
      <NavLink to="/contact">Contact Page</NavLink>
    </>
  );
};

export default Home;
