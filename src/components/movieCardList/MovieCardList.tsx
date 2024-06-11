import styles from "./MovieCardList.module.css";
// import { Movie } from "../../types/movie";
import MovieCard from "../movieCard/MovieCard";
// import { fetchMovieList } from "../../api/movie";
// import { useEffect, useState } from "react";
import useFetchMovieQuery from "../../hooks/useFetchMovieQuery";
import { useRef } from "react";
import InfinityScrollProvider from "../common/InfinityScrollProvider";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const MovieCardList = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useFetchMovieQuery();
  const bottomRef = useRef(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <InfinityScrollProvider
      bottomRef={bottomRef}
      fetchNextPage={fetchNextPage}
      isLoading={isLoading}
    >
      <section className={styles.itemView}>
        <h2>지금 인기 있는 영화</h2>
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
            style={{ height: 100, backgroundColor: "white" }}
          >
            더보기
          </div>
        )}
      </section>
    </InfinityScrollProvider>
  );
};

export default MovieCardList;
