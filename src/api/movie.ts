import { MovieResponse } from "../types/movie";
import fetcher from "./fetcher";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const URL = {
  popular: (page: number) =>
    `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
  search: (page: number, query: string) =>
    `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=${page}&query=${query}`,
};

export const fetchMovieList = async (
  page: number = 1
): Promise<MovieResponse> => {
  const response = await fetcher.get({
    url: URL.popular(page),
  });

  return await response.json();
};
  const data = await response.json();

  return data.results;
};
