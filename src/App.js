import { ThemeProvider } from "emotion-theming";
import React from "react";
import Header from "./components/Header";
import themes from "./themes/theme";
import GlobalStyles from "./utils/GlobalStyles";
import ShowsList from "./components/ShowsList";
import styled from "@emotion/styled";
import Search from "./components/Search";

const ContentWrapper = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default);
  const [searchValue, setSearchValue] = React.useState("");

  function handleThemeClick() {
    if (theme === themes.default) {
      setTheme(themes.light);
    } else {
      setTheme(themes.default);
    }
  }

  function handleSearch(value) {
    setSearchValue(value);
    console.log(value);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContentWrapper>
          <Header title={searchValue} onClick={handleThemeClick} />
          <Search inputValue={searchValue} onSearch={handleSearch} />
          <ShowsList searchValue={searchValue} />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
