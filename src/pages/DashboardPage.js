import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard here</h1>
      <p> This is dashboard </p>
      <Link to="/posts" className="button">
        View Posts
      </Link>
    </section>
  );
};

export default DashboardPage;
