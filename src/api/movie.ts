import { Movie } from "../types/movie";
import fetcher from "./fetcher";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const URL = {
  popular: (page: number) =>
    `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
};

export const fetchMovieList = async (page: number = 1): Promise<Movie[]> => {
  const response = await fetcher.get({
    url: URL.popular(page),
  });

  const data = await response.json();

  return data.results;
};
