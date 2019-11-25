import { ThemeProvider } from "emotion-theming";
import React from "react";
import Header from "./components/Header";
import themes from "./themes/theme";
import GlobalStyles from "./utils/GlobalStyles";
import ShowsList from "./components/ShowsList";
import styled from "@emotion/styled";
import Search from "./components/Search";
import { getDiscoverShows } from "./api/shows";

const ContentWrapper = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default);
  const [shows, setShows] = React.useState(null);

  async function refreshShows(searchValue) {
    const discoveredShows = await getDiscoverShows(searchValue);
    setShows(discoveredShows);
  }

  console.log(shows);

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
        <ContentWrapper>
          <Header title={"cliffhanger."} onClick={handleThemeClick} />
          <Search onSubmit={refreshShows} />
          <ShowsList shows={shows} />
        </ContentWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
