import React from "react";
import "./PokeCard.scss";
import { useHistory } from "react-router-dom";

export default function PokeCard({ pokemon }) {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const history = useHistory();
  const handleClick = () => {
    history.push(`/${pokemon.name}`);
    window.scrollTo(0, 250);
  };

  return (
    <div className="card" onClick={() => handleClick()}>
      <img src={pokemon.img} alt="pokemon" />
      <div className="container">
        <p>{capitalize(pokemon.name)}</p>
      </div>
    </div>
  );
}
