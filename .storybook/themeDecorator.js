import React from "react";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "../src/themes/defaultTheme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
