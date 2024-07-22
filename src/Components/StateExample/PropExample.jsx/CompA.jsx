import React from "react";
import CompB from "./CompB";
const CompA = (prop) => {
  return (
    <>
       <h1>Hey , I am Component A</h1>
       <CompB name={prop.name} profession={prop.profession}/>
    </>
  );
};

export default CompA;
