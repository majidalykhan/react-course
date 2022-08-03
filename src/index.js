import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Reminders of Him: A Novel";
  const author = "Colleen Hoover";
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._AC_SX184_.jpg"></img>
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
