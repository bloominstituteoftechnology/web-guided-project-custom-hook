import React from "react";
import "./../styles.scss";
import Pokemon from './Pokemon';

function PokeList(props) {
  const { pokemen, handlePoke } = props;

  return (
    <div id="pokeList">
      {pokemen.map((pokemon) => (
        <Pokemon pokemon={pokemon} handlePoke={handlePoke}/>
      ))}
    </div>
  );
}

export default PokeList;