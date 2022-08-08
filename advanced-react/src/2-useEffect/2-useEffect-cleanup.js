import React, { useState, useEffect } from "react";

// Cleanup Funciton

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h2>Window</h2>
      <h3>
        {width}x{height}
      </h3>
    </>
  );
};

export default UseEffectCleanup;
