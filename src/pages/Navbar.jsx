import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <Link to="/">
        <div>Stonks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
    </div>
  );
}

export default Navbar;
