import React from "react";
import styled from "@emotion/styled";
import SearchButton from "./SearchButton";

const Searchbar = styled.input`
  width: 100%;
  height: 30px;
`;

const Form = styled.form`
  margin-bottom: 15px;
  display: flex;
`;

const Search = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchValue);
  }

  function handleChange(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Searchbar value={searchValue} onChange={handleChange} />
      <SearchButton />
    </Form>
  );
};

export default Search;
