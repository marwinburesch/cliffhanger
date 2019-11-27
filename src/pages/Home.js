import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to cliffhanger. If you want to search TV shows follow this link
      <Link to="/search">search shows</Link>
    </div>
  );
};

export default Home;
