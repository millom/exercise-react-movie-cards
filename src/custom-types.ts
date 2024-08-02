import { IReview } from "./interfaces";

export type ReviewFunction = (review: IReview) => void;
export type ModalFunction = (show: boolean) => void;
