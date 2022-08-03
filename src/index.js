import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._AC_SX184_.jpg",
  },
  {
    title: "It's Not Summer Without You",
    author: "Jenny Han",
    img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._AC_SX184_.jpg",
  },
  {
    title: "The Lord Of The Rings",
    author: "J.R.R. Tolkien",
    img:'https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._AC_SX184_.jpg',
  },
  
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
