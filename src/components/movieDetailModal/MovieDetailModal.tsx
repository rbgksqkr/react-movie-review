import styles from "./MovieDetailModal.module.css";
import Modal from "../modal/Modal";
import useFetchMovieDetailQuery from "../../hooks/useFetchMovieDetailQuery";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const MovieDetailModal = ({
  movieId,
  handleClickDimmed,
}: {
  movieId: number;
  handleClickDimmed: () => void;
}) => {
  const { data: movie, isLoading } = useFetchMovieDetailQuery(movieId);

  return (
    <Modal handleClickDimmed={handleClickDimmed}>
      <div className={styles.modal}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h3>{movie?.title}</h3>
            <div className={styles.modalContent}>
              <img
                src={IMAGE_BASE_URL + movie?.poster_path}
                width={200}
                height={200}
              />
              <div>{movie?.overview}</div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default MovieDetailModal;
