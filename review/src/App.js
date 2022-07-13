import React, { useState, useEffect } from "react";
import "./styles.scss";

import { getPokemen, getSelectedPokemon } from './services/PokeServices'
import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import data from "./../data";

import axios from 'axios';

function App() {
  const usePokeState = (initPokemen, initSelectedPokemon) => {
    const [pokemen, setPokemen] = useState(initPokemen);
    const [selectedPokemon, setSelectedPokemon] = useState(initSelectedPokemon);
  
    useEffect(() => {
      setPokemen(getPokemen());
    }, []);
  
    const handlePoke = (id) => {
     getSelectedPokemon(id)
        .then((data) => {
          setSelectedPokemon(data);
        });
    };  

    return([selectedPokemon, handlePoke, pokemen])
  }

  const [selectedPokemon, handlePoke, pokemen] = usePokeState([], {});

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
