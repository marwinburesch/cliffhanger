import React from "react";
import styled from "@emotion/styled";
import search from "../assest/search.svg";

const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

const SearchButton = () => {
  return (
    <Button>
      <img alt="searchbutton" src={search} />
    </Button>
  );
};

export default SearchButton;
