import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fb7a6cd6fbmsh277d97e01991540p123b5ejsn611f74fbed59",
    },
  });

  return data;
};
