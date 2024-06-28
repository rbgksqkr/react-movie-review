import { IMAGES } from "../../assets/images";
import styles from "./MovieCard.module.css";
import { useState } from "react";
import MovieDetailModal from "../movieDetailModal/MovieDetailModal";

interface MovieCardProps {
  id: number;
  imageUrl: string;
  title: string;
  score: number;
}

const MovieCard = ({ id, imageUrl, title, score }: MovieCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDimmed = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li onClick={() => setIsOpen(true)}>
        <div className={styles.itemCard}>
          <img
            className={styles.itemThumbnail}
            src={imageUrl}
            loading="lazy"
            alt={title}
          />
          <p className={styles.itemTitle}>{title}</p>
          <p className={styles.itemScore}>
            <img src={IMAGES.STAR_FILLED} alt="별점" />
            {score}
          </p>
        </div>
      </li>

      {isOpen && (
        <MovieDetailModal movieId={id} handleClickDimmed={handleClickDimmed} />
      )}
    </>
  );
};

export default MovieCard;
