import styles from "./MovieCardList.module.css";
import { Movie } from "../../types/movie";
import MovieCard from "../movieCard/MovieCard";
import { fetchMovieList } from "../../api/movie";
import { useEffect, useState } from "react";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const MovieCardList = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchMovieList(page).then((res) => {
      setMovieList((prevMovieList) => [...prevMovieList, ...res]);
    });
  }, [page]);

  return (
    <section className={styles.itemView}>
      <h2>지금 인기 있는 영화</h2>
      <ul className={styles.itemList}>
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            imageUrl={IMAGE_BASE_URL + movie.poster_path}
            title={movie.title}
            score={movie.vote_average}
          />
        ))}
      </ul>
      <button
        className={`${styles.btn} ${styles.primary} ${styles.fullWidth}`}
        onClick={handleClickLoadMore}
      >
        더 보기
      </button>
    </section>
  );
};

export default MovieCardList;
