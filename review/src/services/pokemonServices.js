import data from "./../../data";

const fetchSelectedPoke = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => {
      return(res);
  });
};

const fetchAllPoke = () => {
  return data;
};

export default {
  fetchSelectedPoke,
  fetchAllPoke
};
