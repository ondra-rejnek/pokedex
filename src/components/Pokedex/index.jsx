import React, { useState, useEffect } from "react";
import PokeSearch from "../PokeSearch";
import "./Pokedex.scss";

import PokeCard from "../PokeCard";
import Pagination from "../Pagination";
import PokeMenu from "../PokeMenu";
import AllEntries from "../AllEntries.jsx";

export default function Pokedex({ pokemons }) {
  // const [pokemons, setPokemons] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState("");
  // const [openModal, setOpenModal] = useState(true);

  // const fetchPokemonData = async (pokemon, index) => {
  //   let dataUrl = pokemon.url;
  //   const pokeData = await axios.get(dataUrl);
  //   pokeData.data["img"] = `https://pokeres.bastionbot.org/images/pokemon/${
  //     index + 1
  //   }.png`;
  //   setPokemons((prevArray) => [...prevArray, pokeData.data]);
  // };

  // const fetchPokemons = async () => {
  //   setLoading(true);
  //   const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  //   //console.log(res.data.results);
  //   res.data.results.forEach((pokemon, index) => {
  //     fetchPokemonData(pokemon, index);
  //   });
  //   setLoading(false);
  // };

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

  // useEffect(() => {
  //   fetchPokemons();
  // }, []);

  return (
    <div className="wrapper">
      {/* {openModal ? <PokeModal /> : null} */}
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
