import styles from "./MovieCardList.module.css";
import MovieCard from "../movieCard/MovieCard";
import useFetchMovieQuery from "../../hooks/useFetchMovieQuery";
import { useRef } from "react";
import InfinityScrollProvider from "../common/InfinityScrollProvider";
import { useLocation } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const MovieCardList = () => {
  const { search } = useLocation();
  const queryTitle = new URLSearchParams(search).get("title") || "";
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useFetchMovieQuery(queryTitle);
  const bottomRef = useRef(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <InfinityScrollProvider
      bottomRef={bottomRef}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
    >
      <section className={styles.itemView}>
        <HeaderTitle
          isResult={Boolean(data?.pages[0].results.length)}
          title={queryTitle}
        />
        <ul className={styles.itemList}>
          {data &&
            data.pages.map((page) =>
              page.results.map((movie, idx) => (
                <MovieCard
                  key={`${movie.id}_${idx}`}
                  imageUrl={IMAGE_BASE_URL + movie.poster_path}
                  title={movie.title}
                  score={movie.vote_average}
                />
              ))
            )}
        </ul>

        {hasNextPage && (
          <div
            ref={bottomRef}
            style={{ height: 100, backgroundColor: "inherit" }}
          ></div>
        )}
      </section>
    </InfinityScrollProvider>
  );
};

export default MovieCardList;
