import axios from 'axios';
import data from '../../data';

export const getPokemen = () => {
    return(data);
  }

export const getSelectedPokemon = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => {
      return res.data;
    })
  }