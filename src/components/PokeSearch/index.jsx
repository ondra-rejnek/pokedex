import React from "react";
import "./PokeSearch.scss";
import ClearBtn from "./ClearBtn";

export default function PokeSearch({
  setSearchValue,
  setCurrentPage,
  searchValue,
  clearSearch,
}) {
  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <div className="search-wrapper">
      <div className="search-box">
        <i class="fas fa-search"></i>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Zadejte jméno Pokémona"
          spellCheck={false}
          value={searchValue}
        />
        <ClearBtn active={searchValue} clearSearch={clearSearch} />
      </div>
    </div>
  );
}
