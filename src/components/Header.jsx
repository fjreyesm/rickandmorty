import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState[false];
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <h2 className="titulo">Hola Rick and Morty</h2>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
