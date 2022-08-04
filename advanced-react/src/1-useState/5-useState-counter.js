import React, { useState } from "react";

const useStateCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
};

export default useStateCounter;
