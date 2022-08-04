import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = () => {
    title = "New Title";
    // The value of title is changed but not visible
    // Because we are not re-rendering the component
    // Need to keep value between renders and trigger the re-render
    // Here useState comes to play
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
