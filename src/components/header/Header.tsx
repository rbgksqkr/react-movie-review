import styles from "./Header.module.css";
import { IMAGES } from "../../assets/images";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/?title=${searchValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <header>
      <button onClick={handleClickLogo}>
        <img src={IMAGES.LOGO} alt="MovieList 로고" />
      </button>
      <form className={styles.searchBox} onSubmit={handleSubmitSearch}>
        <input
          type="text"
          placeholder="검색"
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
