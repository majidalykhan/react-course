import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "Hello World"; //first value shows Hello World because || operator check if value is empty or falsy then show the other one
  const secondValue = text && "Hello World"; //second value shows '' empty because && operator check the value and show the first one available
  return (
    <div>
      <h2>Value 1: {firstValue}</h2>
      <h2>Value 2: {secondValue}</h2>
    </div>
  );
};

export default ShortCircuit;
