import React, { useState } from "react";
import "./PokeDetails.scss";
import { useHistory } from "react-router-dom";
import PokeStats from "../PokeStats";
import PokeProfile from "../PokeProfile";

export default function PokeDetails({ pokeData }) {
  const [statsOpen, setStatsOpen] = useState(false);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const changeTab = (e) => {
    if (e.currentTarget.id === "stats") {
      setStatsOpen(true);
    }
    if (e.currentTarget.id === "profile") {
      setStatsOpen(false);
    }
  };

  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="detail-wrapper">
      <div className="back-menu" onClick={() => handleClick()}>
        <i className="fas fa-angle-left" />
        <p>Zpět na přehled</p>
      </div>
      <div className="tabs">
        <div
          id="profile"
          className={statsOpen ? "tab-inactive" : "tab"}
          onClick={(e) => changeTab(e)}
        >
          <i className="far fa-grin-alt"></i>
          <p>Profil</p>
        </div>
        <div
          id="stats"
          className={statsOpen ? "tab" : "tab-inactive"}
          onClick={(e) => changeTab(e)}
        >
          <i className="fas fa-sort"></i>
          <p>Statistiky</p>
        </div>
      </div>
      <div className="detail-content">
        <div className="img-container">
          <div className="image">
            <p>{capitalize(pokeData.name)}</p>
            <img src={pokeData.img} alt="pokemon" />
          </div>
        </div>
        <div className="data-container">
          {statsOpen ? (
            <PokeStats stats={pokeData.stats} />
          ) : (
            <PokeProfile pokeData={pokeData} />
          )}
        </div>
      </div>
    </div>
  );
}
