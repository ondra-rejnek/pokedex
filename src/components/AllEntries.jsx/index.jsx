import React from "react";
import "./AllEntries.scss";

export default function AllEntries({ error, setSearchValue }) {
  const isError = () => {
    if (error) {
      return <i className="fas fa-times"></i>;
    } else {
      return <i className="fas fa-check"></i>;
    }
  };

  const getText = () => {
    if (error) {
      return "Žádné položky k zobrazení";
    } else {
      return "Všechny položky zobrazeny";
    }
  };

  const handleClick = () => {
    setSearchValue("");
    window.scrollTo(0, 0);
  };

  return (
    <div className="entries-wrapper">
      <fieldset>
        <legend>
          <div className={error ? "error" : "tick"}>{isError()}</div>
        </legend>
        <p>{getText()}</p>
      </fieldset>
      <p onClick={handleClick}>
        <u>Zpět na přehled Pokémonů</u>
      </p>
    </div>
  );
}
