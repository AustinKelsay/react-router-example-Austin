import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./styles.css";

import CharacterList from "./compoents/CharacterList";
import Character from "./compoents/Character";

export default function App() {
  return (
    <div>
      <Route exact path="/" component={CharacterList} />
      <Route
        path="/characters/:id"
        render={props => <Character {...props} />}
      />
    </div>
  );
}
