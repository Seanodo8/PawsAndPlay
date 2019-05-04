import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/park" className={window.location.pathname === "/park" ? "nav-link active" : "nav-link"}>
          Paws And Play
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
          Log Out
        </Link>
      </li>
    </ul>
  );
}



export default Nav;