import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-bar" data-testid="map-location-search">
      <div className="search-bar__container">
        <div className="search-bar__input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="search-bar__icon"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="search-input"
            aria-label="search-input"
            type="text"
            placeholder="Find a charger"
            className="search-bar__input"
            data-hj-allow="true"
          />
          <span
            role="tooltip"
            aria-label="Forward slash keyboard shortcut"
            tabIndex="-1"
            className="search-bar__shortcut"
          >
            <kbd className="search-bar__shortcut-key">/</kbd>
          </span>
        </div>
      </div>
      <div className="search-bar__dropdown">
        <div className="search-bar__spacer"></div>
        <div className="search-bar__hidden-element"></div>
        <div className="search-bar__hidden-element search-bar__hidden-element--rounded"></div>
        <div className="search-bar__hidden-dropdown"></div>
      </div>
    </div>
  );
}

export default SearchBar;
