import "../css/MovieCard.css";
import { IReview } from "../interfaces";

export interface IMovieCardProps {
  review: IReview;
  removeReview: Function;
}

export const MovieCard = ({ review, removeReview }: IMovieCardProps) => {
  return (
    <>
      <div className="movie-card-main" onClick={() => removeReview(review)}>
        <article className="card-article">
          <div className="card-line">
            <label className="card-text">Title:</label>
            <p className="card-text">{review.title}</p>
          </div>
          <div className="card-line">
            <label className="card-text">Genre:</label>
            <p className="card-text">{review.genre}</p>
          </div>
          <div className="card-line">
            <label className="card-text">Rating:</label>
            <p className="card-text">{review.rating}</p>
          </div>
          <div className="card-big-line">
            <label className="card-text">Description:</label>
            <p className="card-text card-textarea">{review.description}</p>
          </div>
        </article>
      </div>
    </>
  );
};
