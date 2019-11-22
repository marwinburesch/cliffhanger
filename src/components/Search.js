import React from "react";
import styled from "@emotion/styled";

const Searchbar = styled.input`
  width: 200px;
  height: 50px;
`;

const Search = ({ onSearch, inputValue }) => {
  function handleChange(event) {
    const value = event.target.value;
    onSearch(value);
  }

  return <Searchbar value={inputValue} onChange={handleChange} />;
};

export default Search;
