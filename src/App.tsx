import "./reset.css";
import "./App.module.css";

import MovieCardList from "./components/movieCardList/MovieCardList";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MovieCardList />
      </main>
    </>
  );
};

export default App;
