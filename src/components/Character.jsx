import React from "react";
import { useState, useEffect, useReducer } from "react";
//<link rel="stylesheet" href="./chatarter.css" />;
import "./character.css";

const initialState = { favorites: [] };
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <div className="tablero">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}> {favorite.name}</li>
      ))}
      {characters.map((character) => (
        <div className="ficha" key={character.id}>
          <h3> {character.name}</h3>
          <img src={character.image} alt={character.name} />
          <p> {character.species}</p>
          <p> Status: {character.status}</p>
          <button type="button" onClick={() => handleClick(character)}>
            ADD TO FAV
          </button>
        </div>
      ))}
    </div>
  );
}

export default Characters;
