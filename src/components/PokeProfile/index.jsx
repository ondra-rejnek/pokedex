import React from "react";
import "./PokeProfile.scss";

export default function PokeProfile({ pokeData }) {
  const getTypes = () => {
    let types = "";
    pokeData.types.forEach((type) => {
      types = types + capitalize(type.type.name) + " ";
    });
    return types;
  };

  const getAbilities = (name) => {
    return capitalize(name.replace("-", " "));
  };

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="profile-wrapper">
      <div>
        <div className="profile-container">
          <div>Typ</div>
          <p>{getTypes()}</p>
        </div>
        <div className="profile-container">
          <div>Výška</div>
          <p>{pokeData.height / 10 + " m"}</p>
        </div>
        <div className="profile-container">
          <div>Váha</div>
          <p>{pokeData.weight / 10 + " kg"}</p>
        </div>
      </div>
      <div className="abilities">
        <div>Dovednosti</div>
        {pokeData.abilities.map((ability, index) => {
          return <p key={index}>{getAbilities(ability.ability.name)}</p>;
        })}
      </div>
    </div>
  );
}
