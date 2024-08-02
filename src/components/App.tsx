import { useState } from "react";
import { Header, MovieList, AddMovie } from ".";
import { IReview } from "../interfaces";

import "../css/css-grid.css";
import "../css/App.css";

function App() {
  const reviewArrayDefault: Array<IReview> = new Array();
  const [index, setIndex] = useState(0);
  const [reviewArray, setReviewArray] = useState(reviewArrayDefault);
  const [showModal, setShowModal] = useState(false);

  const setShow = (show: boolean) => {
    setShowModal(show);
  };

  const addReview = (review: IReview) => {
    review.id = index;
    reviewArray.push(review);
    setReviewArray(reviewArray);
    setIndex(index + 1);
    console.log("After add:", reviewArray);
  };

  const removeReview = (review: IReview) => {
    const updatedList = reviewArray.filter((item) => item.id !== review.id);
    setReviewArray(updatedList);

    console.log("remove", review);
    console.log(reviewArray);
  };

  return (
    <div className="body">
      <Header showModal={setShow} disabled={showModal} />
      <MovieList
        disabled={showModal}
        reviews={reviewArray}
        removeReview={removeReview}
      />
      {showModal && <AddMovie closeModal={setShow} addReview={addReview} />}
    </div>
  );
}

export default App;
