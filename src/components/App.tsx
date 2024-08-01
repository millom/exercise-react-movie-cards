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

import "../css/css-grid.css";
import "../css/App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const setShow = (show: boolean) => {
    setShowModal(show);
  };

  return (
    <div className="body">
      <Header showModal={setShow} disabled={showModal} />
      <MovieList disabled={showModal} />
      {showModal && <AddMovie closeModal={setShow} />}
    </div>
  );
}

export default App;
