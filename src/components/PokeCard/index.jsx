import React from "react";
import "./PokeCard.scss";

export default function PokeCard({ pokemon }) {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="card">
      <img src={pokemon.img} alt="pokemon" />
      <div className="container">
        <p>{capitalize(pokemon.name)}</p>
      </div>
    </div>
  );
}
