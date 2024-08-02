import "../css/MovieCard.css";
import { IReview } from "../interfaces";
import { ReviewFunction } from "../custom-types";

export interface IMovieCardProps {
  review: IReview;
  disabled: boolean;
  removeReview: ReviewFunction;
}

export const MovieCard = ({
  review,
  disabled,
  removeReview,
}: IMovieCardProps) => {
  return (
    <>
      <div
        className={
          disabled ? "movie-card-main card-disabled" : "movie-card-main"
        }
        onClick={() => removeReview(review)}
      >
        <article className="card-article">
          <div className="card-line">
            <p className="card-text">{review.title}</p>
            <p className="card-text">{review.rating}/100</p>
          </div>
          <div className="card-line">
            <p className="card-text">{review.genre}</p>
          </div>
          <div className="card-big-line">
            <textarea className="card-text card-textarea">
              {review.description}
            </textarea>
          </div>
        </article>
      </div>
    </>
  );
};
