import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="cabecera">
      <h2 className="titulo">Hola Rick and Morty</h2>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
