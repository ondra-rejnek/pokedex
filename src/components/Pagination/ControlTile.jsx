import React from "react";
import "./Pagination.scss";

export default function ControlTile({
  control,
  currentPage,
  paginate,
  pageNumbers,
}) {
  const handleClick = () => {
    if (control === "increment" && !(currentPage >= pageNumbers)) {
      paginate(currentPage + 1);
    }
    if (control === "decrement" && !(currentPage <= 1)) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="control-tile" onClick={() => handleClick()}>
      <i
        className={
          control === "increment" ? "fas fa-angle-right" : "fas fa-angle-left"
        }
      ></i>
    </div>
  );
}
