import React, { useEffect, useState } from "react";
import CharacterDisplay from "./CharacterDisplay";
import { Link } from "react-router-dom";
import axios from "axios";

const Character = props => {
  console.log("props", props);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  if (!character) {
    return <div>Loading character information...</div>;
  }

  return (
    <div>
      <CharacterDisplay character={character} />
    </div>
  );
};

export default Character;
