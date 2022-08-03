import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._AC_SX184_.jpg",
  },
  {
    id: 2,
    title: "It's Not Summer Without You",
    author: "Jenny Han",
    img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._AC_SX184_.jpg",
  },
  {
    id: 3,
    title: "The Lord Of The Rings",
    author: "J.R.R. Tolkien",
    img: "https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._AC_SX184_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  //Events
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = () => {
    alert("Hello");
  };

  return (
    <article className="book">
      <img src={img}></img>
      <h2 onClick={() => alert("This is a heading")}>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        Event Example
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
