import "./ElectroverseCompatibleButton.scss";

export default function ElectroverseCompatibleButton() {
  return (
    <button
      id=":R356b6:"
      type="button"
      className="electroverse-button"
      aria-checked="true"
    >
      <span className="electroverse-button__icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="electroverse-button__icon"
        >
          <path
            fillRule="evenodd"
            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <p className="electroverse-button__text">Electroverse Compatible</p>
    </button>
  );
}
