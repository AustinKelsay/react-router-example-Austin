import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <div>
      {characters.map(character => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
