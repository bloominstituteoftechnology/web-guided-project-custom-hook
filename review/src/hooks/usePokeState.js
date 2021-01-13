import { useState, useEffect } from "react";
import {fetchAllPoke, fetchSelectedPoke} from "./../services/pokemonServices";

function usePokeState() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(fetchAllPoke());
  }, []);

  const handlePoke = (id) => {
    fetchSelectedPoke(id).then((data) => {
      setSelectedPokemon(data);
    });
  };

  return [pokemen, selectedPokemon, handlePoke];
}

export default usePokeState;
