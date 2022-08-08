import React, { useState, useEffect } from "react";

// useEffect
// By default useEffect will run on every re-render
// Second paramter
// Cleanup Funciton

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // By default useEffect will run on every re-render
  useEffect(
    () => {
      console.log("Call useEffect 1");
      if (value > 0) {
        document.title = `New Message(${value})`;
      }
    },
    [value] /* Second parameter - If empty, useEffect will run on initial render
                            if any value changes in list, useEffect will run each time */
  );

  //Can have unlimited useEffects
  useEffect(
    () => {
      console.log("Call useEffect 2");
    },
    [] /* Will only run on initial render*/
  );

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
