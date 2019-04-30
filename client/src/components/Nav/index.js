import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Paws and Play
      </a>
      <a className="navbar-brand" href="/login">
        Profile
      </a>
      <a className="navbar-brand" href="/">
        Log Out
      </a>
    </nav>
  );
}

export default Nav;