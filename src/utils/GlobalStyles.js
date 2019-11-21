import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
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
  );
}
