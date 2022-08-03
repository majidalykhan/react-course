import React from "react";

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    alert("Hello");
  };

  return (
    <article className="book">
      <img src={img}></img>
      <h2 onClick={() => alert("This is a heading")}>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

export default Book;
