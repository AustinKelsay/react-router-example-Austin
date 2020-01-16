import React from "react";
import { Link } from "react-router-dom";

const CharacterDisplay = props => {
  return (
    <div>
      <img src={props.character.image} />

      <h2>{props.character.name}</h2>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default CharacterDisplay;
