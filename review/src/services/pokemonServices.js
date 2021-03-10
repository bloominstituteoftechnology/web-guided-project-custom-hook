import data from "./../../data";
import axios from 'axios';

export const fetchSelectedPoke = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      return(res.data);
  });
};

export const fetchAllPoke = () => {
  return data;
};