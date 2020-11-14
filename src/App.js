import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import axios from "axios";
import PokeDetails from "./components/PokeDetails";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

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
    await console.log(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          {loading ? (
            <p>Loading...</p>
          ) : (
            pokemons.map((pokemon) => {
              return (
                <Route path={`/${pokemon.name}`}>
                  <PokeDetails pokeData={pokemon} />
                </Route>
              );
            })
          )}
          <Route path="/">
            {loading ? <p>Loading...</p> : <Pokedex pokemons={pokemons} />}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
