import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const firstBook = {
  title: "Reminders of Him: A Novel",
  author: "Colleen Hoover",
  img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._AC_SX184_.jpg",
};

const secondBook = {
  title: "It's Not Summer Without You",
  author: "Jenny Han",
  img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._AC_SX184_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
