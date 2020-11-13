import React from "react";
import "./Pokedex.scss";
import PokeContainer from "../PokeContainer";

export default function index() {
  return (
    <>
      <div className="header">
        <nav>
          <h1>Pokedex</h1>
          <ul>
            <li>
              <p>O nás</p>
            </li>
            <li>
              <p>Pokémoni</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className="body">
        <PokeContainer />
      </div>
    </>
  );
}
