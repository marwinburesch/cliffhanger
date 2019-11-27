import React from "react";
import SearchShows from "../components/SearchShows";
import ShowsList from "../components/ShowsList";

const Search = ({ onSubmit, shows }) => {
  return (
    <>
      <SearchShows onSubmit={onSubmit} />
      <ShowsList shows={shows} />
    </>
  );
};

export default Search;
