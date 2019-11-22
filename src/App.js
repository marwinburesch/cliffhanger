import { ThemeProvider } from "emotion-theming";
import React from "react";
import Header from "./components/Header";
import themes from "./themes/theme";
import GlobalStyles from "./utils/GlobalStyles";
import ShowsList from "./components/ShowsList";

function App() {
  const [theme, setTheme] = React.useState(themes.default);

  function handleThemeClick() {
    if (theme === themes.default) {
      setTheme(themes.light);
    } else {
      setTheme(themes.default);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header onClick={handleThemeClick} />
        <ShowsList />
      </ThemeProvider>
    </>
  );
}

export default App;
