import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import themes from "./themes/theme";
import Title from "./components/Title";

function App() {
  const [theme, setTheme] = React.useState(themes.default);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title>cliffhanger</Title>
      </ThemeProvider>
    </>
  );
}

export default App;
