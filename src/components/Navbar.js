import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/dashboard">Dashboard </Link>
        <Link to="/Posts">Posts </Link>
      </section>
    </nav>
  );
};
export default Navbar;
