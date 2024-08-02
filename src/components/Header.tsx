import "../css/css-grid.css";
import "../css/Header.css";
import { ModalFunction } from "../custom-types";

export interface IHeaderProps {
  showModal: ModalFunction;
  disabled: boolean;
}

export function Header({ showModal, disabled }: IHeaderProps) {
  return (
    <div className={disabled ? "header disabled" : "header"}>
      <div className="header-layout">
        <h1 className="header-text">Movie review list</h1>
        <button
          className={disabled ? "header-button-disabled" : "header-button"}
          onClick={() => showModal(true)}
        >
          Add Review
        </button>
      </div>
    </div>
  );
}
