import React from "react";
import "./Pagination.scss";

export default function PageTile({ pageNumber, isSelected, paginate }) {
  const handleClick = () => {
    if (!isSelected) {
      paginate(pageNumber);
    }
  };
  return (
    <div
      className={isSelected ? "page-tile-selected" : "page-tile"}
      onClick={() => handleClick()}
    >
      <p>{pageNumber}</p>
    </div>
  );
}
