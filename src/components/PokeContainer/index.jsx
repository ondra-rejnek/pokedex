import React, { useState, useEffect } from "react";
import PokeSearch from "../PokeSearch";
import "./PokeContainer.scss";
import axios from "axios";
import PokeCard from "../PokeCard";
import Pagination from "../Pagination";

export default function PokeContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(16);

  const fetchPokemonData = async (pokemon, index) => {
    let dataUrl = pokemon.url;
    const pokeData = await axios.get(dataUrl);
    pokeData.data["img"] = `https://pokeres.bastionbot.org/images/pokemon/${
      index + 1
    }.png`;
    setPokemons((prevArray) => [...prevArray, pokeData.data]);
  };

  const fetchPokemons = async () => {
    setLoading(true);
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    //console.log(res.data.results);
    res.data.results.forEach((pokemon, index) => {
      fetchPokemonData(pokemon, index);
    });
    setLoading(false);
  };

  const getCurrentPokemons = () => {
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
    return currentPokemons;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="wrapper">
      <PokeSearch />
      <div className="container">
        <div className="menu">
          <p>Ikonka</p>
          <p>Prehled Pokemonu</p>
        </div>
        <div className="tile-section">
          {loading ? (
            <p>Loading...</p>
          ) : (
            getCurrentPokemons().map((pokemon, index) => {
              return <PokeCard key={index} pokemon={pokemon} />;
            })
          )}
        </div>
        <Pagination
          pokemonsPerPage={pokemonPerPage}
          allPokemons={pokemons.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
