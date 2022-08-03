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
];

//Simple list example
const movies = ["Iron Man", "Batman", "Harry Potter"];

const newMovies = movies.map((movie) => {
  return <h1>{movie}</h1>;
});

function BookList() {
  return <section className="booklist">{newMovies}</section>;
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h3>{author}</h3>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
