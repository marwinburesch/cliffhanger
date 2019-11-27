import { ThemeProvider } from "emotion-theming";
import React from "react";
import Header from "./components/Header";
import themes from "./themes/theme";
import GlobalStyles from "./utils/GlobalStyles";
import styled from "@emotion/styled";
import { getDiscoverShows } from "./api/shows";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContentWrapper>
        <Router>
          <Header title={"cliffhanger."} onClick={handleThemeClick} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search shows={shows} onSubmit={refreshShows} />
            </Route>
          </Switch>
        </Router>
      </ContentWrapper>
    </ThemeProvider>
  );
}

export default App;
