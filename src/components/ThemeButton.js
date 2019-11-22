/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.highlight};
  box-shadow: 2px 2px 0 ${props => props.theme.lining};
  transition: transform 0.5s ease-in-out;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.7);
  }
`;

const ThemeButton = ({ onClick }) => {
  return <Button onClick={onClick} />;
};

export default ThemeButton;
