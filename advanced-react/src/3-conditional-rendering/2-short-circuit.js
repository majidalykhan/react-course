import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h2>{text || "John"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <p>There is no error</p>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
