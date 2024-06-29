import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {
  handleClickDimmed: () => void;
}

const Modal = ({
  handleClickDimmed,
  children,
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      <div className={styles.dimmed} onClick={handleClickDimmed}></div>
      <div className={styles.modalWrapper}>{children}</div>
    </>,
    document.body
  );
};

export default Modal;
