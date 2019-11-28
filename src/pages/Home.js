import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to cliffhanger. This site is powered by the{" "}
      <Link to="https://developers.themoviedb.org/"> themoviedb.org API</Link>.
      If you want to search TV shows follow this link
      <Link to="/search"> search shows</Link>
    </div>
  );
};

export default Home;
