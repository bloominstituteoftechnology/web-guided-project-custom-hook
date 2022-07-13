import { useEffect, useState } from 'react';
import { getSelectedPokemon, getPokemen } from './../services/PokeServices'

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

export default usePokeState;