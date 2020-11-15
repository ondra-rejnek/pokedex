import React, { useState } from "react";
import PokeSearch from "../PokeSearch";
import "./Pokedex.scss";

import PokeCard from "../PokeCard";
import Pagination from "../Pagination";
import PokeMenu from "../PokeMenu";
import AllEntries from "../AllEntries.jsx";

export default function Pokedex({ pokemons }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState("");

  const getFilteredPokemons = () => {
    const filteredResults = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchValue.toLowerCase())
    );
    return filteredResults;
  };

  const getCurrentPokemons = () => {
    //filter podle searche
    const filteredResults = getFilteredPokemons();
    //arr pro pagination
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = filteredResults.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
    return currentPokemons;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    if (getFilteredPokemons().length > pokemonPerPage) {
      return (
        <Pagination
          pokemonsPerPage={pokemonPerPage}
          allPokemons={getFilteredPokemons().length}
          paginate={paginate}
          currentPage={currentPage}
        />
      );
    } else {
      return (
        <AllEntries
          error={!getCurrentPokemons().length}
          setSearchValue={setSearchValue}
        />
      );
    }
  };

  return (
    <div className="wrapper">
      <PokeSearch
        setSearchValue={setSearchValue}
        setCurrentPage={setCurrentPage}
        searchValue={searchValue}
      />
      <PokeMenu searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="tile-section">
        {getCurrentPokemons().map((pokemon, index) => {
          return <PokeCard key={index} pokemon={pokemon} />;
        })}
      </div>
      {renderPagination()}
    </div>
  );
}
