import React from 'react';

const Pokemon = ({ pokemon, handlePoke })=> {
    return (<div
        onClick={() => handlePoke(pokemon.id)}
        className="pokemon"
      >
        <img src={pokemon.img} alt={pokemon.name} />
        <div>
          <h3>{pokemon.name}</h3>
          {pokemon.next_evolution &&
            pokemon.next_evolution.map((e) => <p key={e.num}>{e.name}</p>)}
        </div>
      </div>);
}

export default Pokemon;