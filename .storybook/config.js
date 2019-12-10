import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import styled from "@emotion/styled";
import React from "react";
import GlobalStyles from "../src/utils/GlobalStyles";

const Main = styled.div`
  margin: 10px;
`;
// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <Main>
    <GlobalStyles />
    {storyFn()}
  </Main>
);

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
addDecorator(GlobalStyleDecorator);
addDecorator(themeDecorator);
