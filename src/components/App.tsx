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
  const reviewMapDefault: Map<number, IReview> = new Map();
  const [index, setIndex] = useState(0);
  const [reviewMap, setReviewMap] = useState(reviewMapDefault);
  const [showModal, setShowModal] = useState(false);

  const setShow = (show: boolean) => {
    setShowModal(show);
  };

  const addToReceiveMap = (review: IReview) => {
    console.log("Before:", reviewMap, index);
    review.id = index;
    reviewMap.set(index, review);
    setReviewMap(reviewMap);
    setIndex(index + 1);
    console.log("After:", reviewMap, index);
  };

  return (
    <div className="body">
      <Header showModal={setShow} disabled={showModal} />
      <MovieList disabled={showModal} />
      {showModal && (
        <AddMovie closeModal={setShow} addReview={addToReceiveMap} />
      )}
    </div>
  );
}

export default App;
