import React, { useRef, useEffect } from "react";

// Preserves value
// Does not trigger re-render
// Target dom nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} name="" id="" />
          <button type="submit">Submit</button>
        </div>
        <div ref={divContainer}>Hello World</div>
      </form>
    </>
  );
};

export default UseRefBasics;
