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

import { FormEventHandler, useRef } from "react";
import { IReview } from "../interfaces";

import "../css/AddMovie.css";

export interface IAddMovieProps {
  // addReview: Map<number, IReview>;
  addReview: Function;
  // index: number;
  closeModal: Function;
}

// export const AddMovie = ({ reviewMap, index, closeModal }: IAddMovieProps) => {
export const AddMovie = ({ closeModal, addReview }: IAddMovieProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const desvriptionRef = useRef<HTMLInputElement>(null);

  const resetForm: FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    titleRef.current!.value = "";
    ratingRef.current!.value = "";
    genreRef.current!.value = "Drama";
    desvriptionRef.current!.value = "";
  };

  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const review: IReview = {
      id: -1, // Set later
      title: titleRef.current!.value,
      genre: genreRef.current!.value,
      description: desvriptionRef.current!.value,
      rating: parseInt(ratingRef.current!.value),
    };
    console.log(review);
    addReview(review);
    closeModal(false);
  };

  return (
    <form className="add-movie-main" onSubmit={submit}>
      <div className="add-big-container">
        <div className="add-small-container">
          <label className="add-label" htmlFor="titleId">
            Title:
          </label>
          <input id="titleId" className="add-edit" type="text" ref={titleRef} />
        </div>
        <div className="add-small-container">
          <label className="add-label" htmlFor="ratingId">
            Rating:
          </label>
          <input
            id="ratingId"
            className="add-edit"
            type="range"
            ref={ratingRef}
          />
        </div>
        <div className="add-small-container">
          <label className="add-label" htmlFor="genreId">
            Genre:
          </label>
          <select id="genreId" className="add-edit" ref={genreRef}>
            <option>Drama</option>
            <option>Action</option>
            <option>Thriller</option>
            <option>Comedy</option>
          </select>
        </div>
        <div className="add-small-container">
          <label className="add-label" htmlFor="descriptionIs">
            Description:
          </label>
          <input
            id="descriptionId"
            className="add-edit add-text-area"
            type="textarea"
            ref={desvriptionRef}
          />
        </div>
        <div className="add-buttons-position">
          <div className="add-buttons-container">
            <button onClick={resetForm}>Clear</button>
            {/* <button onClick={submit} type="submit"> */}
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};
