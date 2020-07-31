import React from "react";

const Button = ({ index, increment }) => {
  return (
    <button
      type="button"
      onClick={() => {
        increment();
      }}
    >
      {index}
    </button>
  );
};

export default Button;
