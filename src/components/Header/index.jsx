import React from "react";
import "./Header.scss";
import logo from "../../logo.png";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="Pokedex" />
        <ul>
          <li>
            <p>O nás</p>
          </li>
          <li>
            <p>Pokémoni</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
