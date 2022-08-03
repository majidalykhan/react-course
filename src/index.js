import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  //This is an implicit return
  <img src="https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._AC_SX184_.jpg"></img>
);

const Title = () => <h2>Reminders of Him: A Novel</h2>;

const Author = () => <h3>Colleen Hoover</h3>;

ReactDOM.render(<BookList />, document.getElementById("root"));
