import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>This is the Home page</h1>
              <NavLink to="/about">About page</NavLink>
              <NavLink to="/contact">Contact Page</NavLink>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Home;
