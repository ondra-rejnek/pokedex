import React from "react";
import "./Pagination.scss";
import PageTile from "./PageTile";
import ControlTile from "./ControlTile";

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  paginate,
  currentPage,
}) {
  const getPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const filterPageNumbers = (number) => {
    const lastPageNumber = Math.ceil(allPokemons / pokemonsPerPage);
    if (
      number === 1 ||
      number === lastPageNumber ||
      number === currentPage ||
      number === currentPage + 1 ||
      number === currentPage - 1
    ) {
      return (
        <PageTile
          key={number}
          pageNumber={number}
          paginate={paginate}
          isSelected={isSelected(number)}
        />
      );
    }
    if (number === currentPage + 2 || number === currentPage - 2) {
      return (
        <div className="dots-tile" key={number}>
          <p>...</p>
        </div>
      );
    }
  };

  const isSelected = (indexNum) => {
    if (indexNum === currentPage) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="wrapper-page">
      <ControlTile
        control={"decrement"}
        paginate={paginate}
        currentPage={currentPage}
        pageNumbers={getPageNumbers().length}
      />
      {getPageNumbers().map((number) => filterPageNumbers(number))}
      <ControlTile
        control={"increment"}
        paginate={paginate}
        currentPage={currentPage}
        pageNumbers={getPageNumbers().length}
      />
    </div>
  );
}
