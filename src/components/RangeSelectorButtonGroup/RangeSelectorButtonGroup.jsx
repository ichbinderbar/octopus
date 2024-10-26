import "./RangeSelectorButtonGroup.scss";

export default function RangeSelectorButtonGroup() {
  return (
    <div className="range-selector">
      <p className="range-selector__label">0 - 350+</p>

      <button
        id=":Rl56b6:"
        type="button"
        className="range-selector__button"
        aria-checked="false"
      >
        <span className="range-selector__icon-container range-selector__icon-container--yellow">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="range-selector__icon"
          >
            <path
              d="M0.0605469 7.58523C0.0605469 7.46263 0.116265 7.31773 0.216585 7.20629L5.09831 1.0874C5.51071 0.585863 6.17942 0.920218 5.94538 1.54437L4.34042 5.84652H7.36085C7.60604 5.84652 7.80669 6.02486 7.80669 6.2812C7.80669 6.39266 7.75094 6.53756 7.65065 6.64899L2.7689 12.779C2.35652 13.2806 1.68779 12.9462 1.92185 12.3221L3.52681 8.0199H0.506361C0.261165 8.0199 0.0605469 7.83042 0.0605469 7.58523Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="range-selector__text">Rapid</p>
      </button>

      <button
        id=":Rt56b6:"
        type="button"
        className="range-selector__button"
        aria-checked="false"
      >
        <span className="range-selector__icon-container range-selector__icon-container--pink">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="range-selector__icon"
          >
            <path
              d="M0.0605469 7.58523C0.0605469 7.46263 0.116265 7.31773 0.216585 7.20629L5.09831 1.0874C5.51071 0.585863 6.17942 0.920218 5.94538 1.54437L4.34042 5.84652H7.36085C7.60604 5.84652 7.80669 6.02486 7.80669 6.2812C7.80669 6.39266 7.75094 6.53756 7.65065 6.64899L2.7689 12.779C2.35652 13.2806 1.68779 12.9462 1.92185 12.3221L3.52681 8.0199H0.506361C0.261165 8.0199 0.0605469 7.83042 0.0605469 7.58523Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="range-selector__text">Ultra</p>
      </button>
    </div>
  );
}
