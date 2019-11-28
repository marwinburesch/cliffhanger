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
          transition: background 0.5s, color 0.5s;
          color: ${theme.primarytext};
        }
        body {
          margin: 0;
          font-family: "Raleway", sans-serif;
          background: ${theme.primary};
        }
        a {
          color: #f24b4b;
          text-decoration: none;
          &::visited {
            color: #f24b4b;
          }
        }
        h1 {
          font-family: "Abril Fatface", cursive;
        }
        h2 {
          font-family: "Abril Fatface", cursive;
          text-align: center;
        }
      `}
    />
  );
}
