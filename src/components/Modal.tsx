// import React from "react";
// import styles from "./modal.module.css";

import { MouseEventHandler } from "react";

import "../css/Modal.css";

export interface IModalProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

export const Modal = ({ closeModal }: IModalProps) => {
  return (
    // <div onClick={closeModal} className={styles.modalBack}>
    //     <div className={styles.modalContainer}>
    <div>
      <div className="modal-main">
        <div>
          <h2>Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi.
            Dolorem est esse iste perferendis.
          </p>
        </div>
        {/* <button onClick={closeModal} className={styles.modal__closeBtn}> */}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};
