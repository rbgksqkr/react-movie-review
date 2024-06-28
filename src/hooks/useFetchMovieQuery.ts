import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovieList } from "../api/movie";

const useFetchMovieQuery = (queryTitle: string) => {
  return useInfiniteQuery({
    queryKey: ["movieList", queryTitle],
    queryFn: ({ pageParam }) => {
      return fetchMovieList(pageParam, queryTitle);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.page === lastPage.total_pages) {
        return null;
      }

      return lastPageParam + 1;
    },
    staleTime: 60 * 60 * 1000,
  });
};

export default useFetchMovieQuery;
