const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const popular = "movie/popular?language=en-US&page=1";

export const fetchMovieList = async () => {
  const response = await fetch(`${BASE_URL}/${popular}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  const data = await response.json();

  return data.results;
};
