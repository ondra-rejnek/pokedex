import React from "react";
import "./PokeMenu.scss";

export default function PokeMenu({ searchValue, clearSearch }) {
  if (searchValue) {
    return (
      <div className="clear-filter">
        <div className="menu">
          <i class="fas fa-filter"></i>
          <p>Výsledky hledání</p>
        </div>
        <div className="clear-menu" onClick={() => clearSearch()}>
          <i class="far fa-times-circle"></i>
          <p>
            <u>Smazat filtry</u>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <i class="fas fa-th"></i>
        <p>Přehled Pokémonů</p>
      </div>
    );
  }
}
