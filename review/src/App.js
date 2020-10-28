import React, { useState, useEffect } from "react";
import "./styles.scss";

import pokemonServices from './services/pokemonServices';

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import data from "./../data";

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(pokemonServices.fetchAllPoke());
  }, []);

  const handlePoke = (id) => {
    pokemonServices.fetchSelectedPoke(id).then((data) => {
        setSelectedPokemon(data);
    });
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
