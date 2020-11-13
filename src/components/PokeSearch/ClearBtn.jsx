import React from "react";
import "./PokeSearch.scss";

export default function ClearBtn({ active, clearSearch }) {
  return (
    <div
      className={active ? "clear-btn-active" : "clear-btn"}
      onClick={() => clearSearch()}
    >
      <i class="fas fa-times"></i>
    </div>
  );
}
