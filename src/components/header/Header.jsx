import React from "react";
import { stringData } from "../../data";

const Header = () => {
  const { title_Name } = stringData;
  return (
    <>
      <header>
        <h1 className="text-5xl text-white font-semi-bold capitalize p-10">
          {title_Name}
        </h1>
      </header>
    </>
  );
};

export default Header;
