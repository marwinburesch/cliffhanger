import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/defaultTheme";
import Title from "./components/Title";
// import styled from "@emotion/styled";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Title>cliffhanger</Title>
      </ThemeProvider>
    </>
  );
}

export default App;
