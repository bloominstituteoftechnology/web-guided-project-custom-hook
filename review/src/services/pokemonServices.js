import data from "./../../data";

export const fetchSelectedPoke = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllPoke = () => {
  return data;
};