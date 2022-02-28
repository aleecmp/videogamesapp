import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/videogames">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
