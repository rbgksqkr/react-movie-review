import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../api/movie";
import { Movie } from "../types/movie";

const useFetchMovieDetailQuery = (movieId: number) => {
  return useQuery<Movie>({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieDetail(movieId),
    staleTime: 60 * 60 * 1000,
    enabled: !!movieId,
  });
};

export default useFetchMovieDetailQuery;
