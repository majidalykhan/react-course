import React from "react";
import ReactDOM from "react-dom";

// JSX rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// close every element 
// formatting

function Hello() {
  return (
    <div>
      <h1>This is first component</h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
