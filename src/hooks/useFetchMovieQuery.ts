import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovieList } from "../api/movie";

const useFetchMovieQuery = () => {
  return useInfiniteQuery({
    queryKey: ["movieList"],
    queryFn: ({ pageParam }) => {
      return fetchMovieList(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.page === lastPage.total_pages) {
        return null;
      }

      return lastPageParam + 1;
    },
  });
};

export default useFetchMovieQuery;
