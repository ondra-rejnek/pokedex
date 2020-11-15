import React from "react";
import Header from "../Header";
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div className="body">{props.children}</div>
    </div>
  );
}
