import React from "react";
import Title from "./Title";
import ThemeButton from "./ThemeButton";
import styled from "@emotion/styled";

const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ onClick }) => {
  return (
    <Flexbox>
      <Title>cliffhanger.</Title>
      <ThemeButton onClick={onClick} />
    </Flexbox>
  );
};

export default Header;
