import React, { useState } from "react";

const useStateBasics = () => {
  const [text, setText] = useState("Random Text");

  const handleClick = () => {
    if (text === "Random Text") {
      setText("Text Updated Successfully");
    } else {
      setText("Random Text");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
