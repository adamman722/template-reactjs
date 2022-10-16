import React, { useState } from "react";
import "./output.css";
import { Link } from "react-router-dom";

function DropDown() {
  const [openDropDown, setOpenDropDown] = useState(false);

  const openFunction = () => {};

  return (
    <nav className="nav-container">
      <ul>
        <li>Elements</li>
        <li>Forms</li>
        <li>Alerts & Windows</li>
        <li>Widgets</li>
        <li>Interactions</li>
      </ul>
    </nav>
  );
}

export default DropDown;
