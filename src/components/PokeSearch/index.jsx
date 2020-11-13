import React from "react";
import "./PokeSearch.scss";

export default function PokeSearch() {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <i class="fas fa-search"></i>
        <input
          type="text"
          placeholder="Zadejte jméno Pokémona"
          spellCheck={false}
        />
        <i class="fas fa-times"></i>
      </div>
    </div>
  );
}
