import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to cliffhanger. This site is powered by the{" "}
      <a href="https://developers.themoviedb.org/">themoviedb.org API</a>. And
      this text is cool! If you want to search TV shows follow this link
      <Link to="/search"> search shows</Link>
    </div>
  );
};

export default Home;
