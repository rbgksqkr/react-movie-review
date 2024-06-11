import "./App.module.css";
import { useEffect, useState } from "react";
import { fetchMovieList } from "./api/movie";
import { Movie } from "./types/movie";
import MovieCardList from "./components/movieCardList/MovieCardList";
import Header from "./components/header/Header";

const App = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovieList().then((res) => {
      setMovieList(res);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <MovieCardList movieList={movieList} />
      </main>
    </>
  );
};

export default App;
