import React from "react";
import ReactDOM from "react-dom";

function Hello() {
  return (
    <div>
      <Name />
      <Message />
    </div>
  );
}

const Name = () => {
  return <h1>Mak</h1>;
};

const Message = () => {
  return <h3>Learning React</h3>;
};

ReactDOM.render(<Hello />, document.getElementById("root"));
