import { useState, useEffect } from "react";
import pokemonServices from "./../services/pokemonServices";

function usePokeState() {
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

  return [pokemen, selectedPokemon, handlePoke];
}

export default usePokeState;
