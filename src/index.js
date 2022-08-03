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
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/*Content in the opening and closing tag of component is Props chidlren */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        asperiores!
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
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
