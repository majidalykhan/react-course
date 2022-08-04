import React, { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: "Harry",
    age: 26,
    message: "Random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default useStateObject;
