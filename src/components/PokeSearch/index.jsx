import React from "react";
import "./PokeSearch.scss";

export default function PokeSearch({
  setSearchValue,
  setCurrentPage,
  searchValue,
}) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
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
        <div
          className={searchValue ? "clear-btn-active" : "clear-btn"}
          onClick={() => setSearchValue("")}
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}
