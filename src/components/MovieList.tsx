import { IReview } from "../interfaces";
import { MovieCard } from "./MovieCard";

import "../css/MovieList.css";

export interface IMovieListProps {
  reviews: Array<IReview>;
  disabled: boolean;
  removeReview: Function;
}

export function MovieList({
  disabled,
  reviews,
  removeReview,
}: IMovieListProps) {
  return (
    <div className={disabled ? "container disabled" : "container"}>
      {reviews.map((review) => (
        <MovieCard
          key={review.id}
          review={review}
          removeReview={removeReview}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
