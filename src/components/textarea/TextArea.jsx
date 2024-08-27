import React from "react";

const TextArea = ({ className, value, placeholder, handleChange }) => {
  return (
    <>
      <textarea
        className={`${className}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
        }}
      ></textarea>
    </>
  );
};

export default TextArea;
