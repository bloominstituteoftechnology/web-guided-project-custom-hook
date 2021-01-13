import React from "react";
import "./../styles.scss";

function SelectedPoke(props) {
  const { selectedPokemon } = props;

  return (
    <div id="selectedDiv">
      <h2>Selected Pokemon: {selectedPokemon.name || "none"}</h2>
      {selectedPokemon.name && (
        <div>
          <img src={selectedPokemon.sprites.front_default} />
          <h5>Height: {selectedPokemon.height}</h5>
          <h5>Weight: {selectedPokemon.weight}</h5>
          <h5>Abilities:</h5>
          <ul>
            {selectedPokemon.abilities.map((a) => (
              <li key={a.ability.name}>
                {a.ability.name} - Slot {a.slot}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectedPoke;
