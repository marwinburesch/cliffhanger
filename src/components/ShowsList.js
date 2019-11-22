import React from "react";
import { getDiscoverShows } from "../api/shows";
import styled from "@emotion/styled";
import Show from "./Show";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const ShowsList = ({ searchValue }) => {
  const [shows, setShows] = React.useState([]);

  console.log(shows);

  async function refreshShows() {
    const discoveredShows = await getDiscoverShows(searchValue);
    setShows(discoveredShows);
  }

  React.useEffect(() => {
    refreshShows();
  }, []);

  return (
    <List>
      {shows.map(show => (
        <Show show={show} key={show.id} />
      ))}
    </List>
  );
};

export default ShowsList;
