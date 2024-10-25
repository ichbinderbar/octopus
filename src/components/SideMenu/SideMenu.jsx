import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMap,
  faInfoCircle,
  faEnvelope,
  faSignInAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.scss";

export default function SideMenu() {
  return (
    <menu className="side-menu">
      <ul>
        <li>
          <a href="/map">
            <FontAwesomeIcon icon={faMap} />
          </a>
        </li>
        <li>
          <a href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
          </a>
        </li>
        <li>
          <a href="/profile">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li>
          <a href="/signup">
            <FontAwesomeIcon icon={faUserPlus} />
          </a>
        </li>
        <li>
          <a href="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
          </a>
        </li>
      </ul>
    </menu>
  );
}
