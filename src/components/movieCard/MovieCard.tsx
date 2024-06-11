import { IMAGES } from "../../assets/images";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  score: number;
}

const MovieCard = ({ imageUrl, title, score }: MovieCardProps) => {
  return (
    <li>
      <div className={styles.itemCard}>
        <img
          className={styles.itemThumbnail}
          src={imageUrl}
          loading="lazy"
          alt="앤트맨과 와스프: 퀀텀매니아"
        />
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemScore}>
          <img src={IMAGES.STAR_FILLED} alt="별점" />${score}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
