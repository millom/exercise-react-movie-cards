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
    // show
    //   ? document.querySelector(".container")?.classList.add("disabled")
    //   : document.querySelector(".container")?.classList.remove("disabled");
    setShowModal(show);
  };

  return (
    <div className="body">
      <Header showModal={setShow} disabled={showModal} />
      <MovieList disabled={showModal} />
      {/* <Modal closeModal={setShow} /> */}
      {showModal && <AddMovie closeModal={setShow} />}
    </div>
  );
}
// {showModal && <Modal closeModal={() => showModal1(false)} />}

export default App;

// import { Modal } from ".";

// const [showModal, setShowModal] = useState(false);

// const showModal1 = (show: boolean) => {
//   show
//     ? document.querySelector(".container")?.classList.add("disabled")
//     : document.querySelector(".container")?.classList.remove("disabled");
//   setShowModal(show);
// };
