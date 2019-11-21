import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        font-family: "Raleway", sans-serif;
      }
      h1 {
        font-family: "Abril Fatface", cursive;
      }
    `}
  />;
};

export default GlobalStyles;
