import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./utils/defaultTheme";
// import styled from "@emotion/styled";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <h1>cliffhanger</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
