import React from "react";
import "./PokeSearch.scss";

export default function index() {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-term"
        placeholder="Zadejte jmeno Pokemona"
      />
      <input type="submit" className="searchButton" />
    </div>
  );
}
