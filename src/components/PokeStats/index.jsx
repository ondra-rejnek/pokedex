import React from "react";
import "./PokeStats.scss";

export default function PokeStats({ stats }) {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const getAbilities = (name) => {
    if (name === "special-attack") {
      return "Sp Atk";
    }
    if (name === "special-defense") {
      return "Sp Def";
    }
    return capitalize(name);
  };

  const abilityBar = (stat) => {
    return (
      <div className="bar-outer">
        <div className="bar-inner" style={{ width: `${stat.base_stat}%` }}>
          <p>{stat.base_stat}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="stats-wrapper">
      {stats.map((stat, index) => {
        return (
          <div className="stat-container" key={index}>
            <p>{getAbilities(stat.stat.name)}</p>
            {abilityBar(stat)}
          </div>
        );
      })}
    </div>
  );
}
