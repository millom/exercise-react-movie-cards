import "../css/css-grid.css";
import "../css/Header.css";

export interface IHeaderProps {
  showModal: Function;
  disabled: boolean;
}

export function Header({ showModal, disabled }: IHeaderProps) {
  return (
    <div className={disabled ? "header disabled" : "header"}>
      <h1 className="header-text">Movie review list</h1>
      <button className="header-button" onClick={() => showModal(true)}>
        Add Movie
      </button>
    </div>
  );
}
