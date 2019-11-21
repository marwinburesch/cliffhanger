/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.highlight};
  box-shadow: 2px 2px 0 ${props => props.theme.lining};
  transition: transform 0.5s;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ThemeButton = ({ onClick }) => {
  return <Button onClick={onClick} />;
};

export default ThemeButton;
