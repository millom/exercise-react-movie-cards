import "../css/MovieCard.css";

export interface IMovieCardProps {
  closeModal: Function;
}

export const MovieCard = ({ closeModal }: IMovieCardProps) => {
  return (
    <>
      <div className="movie-card-main">
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
