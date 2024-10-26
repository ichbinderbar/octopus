import { useState, useEffect } from "react";
import "./Header.scss";
import octopusElectroverseLogo from "../../assets/images/octopusElectroverseLogo.svg";
import octopusElectroverseLogoNoText from "../../assets/images/octopusElectroverseLogoNoText.svg";
import CountriesMenu from "../CountriesMenu/CountriesMenu";
import phoneWithLightning from "../../assets/icons/phoneWithLightning.svg";
import SearchBar from "../SearchBar/SearchBar";
import ElectroverseCompatibleButton from "../ElectroverseCompatibleButton/ElectroverseCompatibleButton";
import RangeSelectorButtonGroup from "../RangeSelectorButtonGroup/RangeSelectorButtonGroup";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header__main-container">
          <button className="header__menu-button" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <nav className={isMenuOpen ? "header__menu--active" : "header__menu"}>
            <ul className="header__nav-container">
              <div className="header__subcontainer">
                <a href="/map">
                  <li className="header__menu-item">Map</li>
                </a>
                <a href="https://electroverse.octopus.energy/business">
                  <li className="header__menu-item">Business</li>
                </a>
                <a href="/map">
                  <li className="header__menu-item">Community</li>
                </a>
                <a href="https://electroverse.octopus.energy/stats">
                  <li className="header__menu-item">Stats</li>
                </a>
              </div>

              <div className="header__user-options">
                <a id="signup" href="/signup">
                  <li className="header__menu-item">Sign Up</li>
                </a>
                <a href="/login">
                  <li className="header__menu-item">Log In</li>
                </a>
              </div>
            </ul>
          </nav>
          <a
            className="header__logo-container"
            href="https://electroverse.octopus.energy/"
          >
            <img
              className="header__logo header__logo--small"
              src={octopusElectroverseLogoNoText}
              alt="small logo"
            />
            <img
              className="header__logo header__logo--large"
              src={octopusElectroverseLogo}
              alt="large logo"
            />
          </a>
          <a className="header__app-icon-container">
            <img
              className="header__app-icon"
              src={phoneWithLightning}
              alt="app icon"
            />
          </a>
          <CountriesMenu />
        </div>
        <div className="header__search">
          <SearchBar />
          <div className="header__search-divider">
            <ElectroverseCompatibleButton />
            <RangeSelectorButtonGroup />
          </div>
        </div>
      </header>
    </>
  );
}
