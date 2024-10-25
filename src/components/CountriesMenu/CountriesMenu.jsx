import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./CountriesMenu.scss";

// Import the flag images
import gbFlag from "../../assets/icons/flags/gb.svg";
import frFlag from "../../assets/icons/flags/fr.svg";
import esFlag from "../../assets/icons/flags/es.svg";
import itFlag from "../../assets/icons/flags/it.svg";
import deFlag from "../../assets/icons/flags/de.svg";

const countries = [
  { code: "GB", flag: gbFlag, value: "en" },
  { code: "FR", flag: frFlag, value: "fr" },
  { code: "ES", flag: esFlag, value: "es" },
  { code: "IT", flag: itFlag, value: "it" },
  { code: "DE", flag: deFlag, value: "de" },
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // Filter out the selected country from the dropdown list
  const filteredCountries = countries.filter(
    (country) => country.code !== selectedCountry.code
  );

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.code}
          className="dropdown__flag"
        />
        {selectedCountry.code}
        <span className="dropdown__arrow">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {filteredCountries.map((country) => (
            <li
              key={country.value}
              className="dropdown__item"
              onClick={() => handleSelect(country)}
            >
              <img
                src={country.flag}
                alt={country.code}
                className="dropdown__flag"
              />
              {country.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
