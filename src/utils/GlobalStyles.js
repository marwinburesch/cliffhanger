import React from "react";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";

const GlobalStyles = withTheme(({ theme }) => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        font-family: "Raleway", sans-serif;
        background: ${theme.primary};
      }
      h1 {
        font-family: "Abril Fatface", cursive;
        color: ${theme.primarytext};
      }
    `}
  />
));

export default GlobalStyles;
