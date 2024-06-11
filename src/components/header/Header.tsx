import styles from "./Header.module.css";
import { IMAGES } from "../../assets/images";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={IMAGES.LOGO} alt="MovieList 로고" />
      </h1>
      <div className={styles.searchBox}>
        <input type="text" placeholder="검색" />
        <button className={styles.searchButton}>검색</button>
      </div>
    </header>
  );
};

export default Header;
