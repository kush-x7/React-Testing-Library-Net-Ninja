import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      {/* <h1 title="Header" className="header">
        {title}
      </h1> */}
      <h1 title="Header" className="header" data-test-id="header-1">
        {title}
      </h1>
      {/* <h1 className="header">Kush</h1> */}
    </>
  );
}
