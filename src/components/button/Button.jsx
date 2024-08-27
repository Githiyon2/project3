import React from "react";

const Button = ({ className, handleClick, btnName }) => {
  return (
    <>
      <button className={className} onClick={handleClick}>
        {btnName}
      </button>
    </>
  );
};

export default Button;
