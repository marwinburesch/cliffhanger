import React from "react";
import styled from "@emotion/styled";

const Searchbar = styled.input`
  width: 200px;
  height: 50px;
`;

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleOnChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  }

  return <Searchbar value={searchValue} onChange={handleOnChange} />;
};

export default Search;
