import React, { useState, useEffect } from "react";

// useEffect
// By default useEffect will run on every re-render
// Second paramter
// Cleanup Funciton

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Call useEffect 1");
    if (value > 0) {
      document.title = `New Message(${value})`;
    }
  });

  console.log("Render Component");

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
