// {
/* <dialog id="modal" class="modal">
  <button id="closeModal" class="modal-close-btn">Close</button>
  <p>...</p>
  <!-- Add more elements as needed -->
</dialog> */
// }

// import React, { useRef } from "react";

// const Modal: React.FC = () => {
//   const modalRef = useRef<HTMLDialogElement | null>(null);

//   return (
//     <dialog ref={modalRef} className="modal">
//       {/* {children} */}
//     </dialog>
//   );
// };

// export default Modal;

import "../css/AddMovie.css";

export interface IAddMovieProps {
  closeModal: Function;
}

export const AddMovie = ({ closeModal }: IAddMovieProps) => {
  return (
    <>
      <div className="add-movie-main">
        <div>
          <h2>Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi.
            Dolorem est esse iste perferendis.
          </p>
        </div>
        <button onClick={() => closeModal(false)}>Close Modal</button>
      </div>
    </>
  );
};
