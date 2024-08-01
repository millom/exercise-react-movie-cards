// import "../css/App.css";

// export function App() {
//   return (
//     <>
//       <h1>This is the App component</h1>
//     </>
//   );
// }

import { useState } from "react";
import { Header, MovieList, AddMovie } from ".";
import { IReview } from "../interfaces";

import "../css/css-grid.css";
import "../css/App.css";

function App() {
  // let initialIndex: number = 0;
  const reviewArrayDefault: Array<IReview> = new Array();
  // const [index, setIndex] = useState(0);
  const [reviewArray, setReviewArray] = useState(reviewArrayDefault);
  const [showModal, setShowModal] = useState(false);

  const setShow = (show: boolean) => {
    setShowModal(show);
  };

  const addReview = (review: IReview) => {
    console.log("Before:", reviewArray);
    // review.id = index;
    reviewArray.push(review);
    setReviewArray(reviewArray);
    // setIndex(index + 1);
    console.log("After:", reviewArray);
  };

  return (
    <div className="body">
      <Header showModal={setShow} disabled={showModal} />
      <MovieList disabled={showModal} />
      {showModal && <AddMovie closeModal={setShow} addReview={addReview} />}
    </div>
  );
}

export default App;
