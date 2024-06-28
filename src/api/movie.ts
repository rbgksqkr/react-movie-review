import { MovieResponse } from "../types/movie";
import fetcher from "./fetcher";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const URL = {
  popular: (page: number) =>
    `${BASE_URL}/movie/popular?language=ko-KR&page=${page}`,
  search: (page: number, query: string) =>
    `${BASE_URL}/search/movie?include_adult=false&language=ko-KR&page=${page}&query=${query}`,
  detail: (movieId: number) => `${BASE_URL}/movie/${movieId}?language=ko-KR`,
};

export const fetchMovieList = async (
  page: number = 1,
  query?: string
): Promise<MovieResponse> => {
  const response = await fetcher.get({
    url: query ? URL.search(page, query) : URL.popular(page),
  });

  return await response.json();
};

export const fetchMovieDetail = async (movieId: number) => {
  const response = await fetcher.get({
    url: URL.detail(movieId),
  });

  return await response.json();
};
