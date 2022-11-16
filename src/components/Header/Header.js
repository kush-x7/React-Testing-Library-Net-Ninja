import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      {/* <h1 title="Header" className="header">
        {title}
      </h1> */}
      <h1 title="Header" className="header" data-testId="header-1">
        My Header
      </h1>
      <h1 className="header">Kush</h1>
    </>
  );
}
