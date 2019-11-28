import React from "react";
import styled from "@emotion/styled";
import SearchButton from "./SearchButton";

const Searchbar = styled.input`
  width: 100%;
  height: 30px;
  margin-right: 10px;
  border-radius: 15px;
  border: none;
  box-shadow: 4px 4px 0 ${props => props.theme.lining};
  padding: 0 15px 0 15px;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  background: ${props => props.theme.primarytext};
  color: ${props => props.theme.primary};
`;

const Form = styled.form`
  margin-bottom: 15px;
  display: flex;
`;

const SearchShows = ({ onSubmit }) => {
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

export default SearchShows;
