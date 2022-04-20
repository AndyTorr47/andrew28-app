import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/articles">
        <p>Articles</p>
      </Link>
    </nav>
  );
};

export default Nav;
