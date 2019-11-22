import React from "react";
import { getDiscoverShows } from "../api/shows";
import styled from "@emotion/styled";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const ItemWrapper = styled.div`
  flex-basis: 15%;
  margin: 10px;
  overflow: hidden;
`;

const Item = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const ShowsList = () => {
  const [shows, setShows] = React.useState([]);

  async function refreshShows() {
    const discoveredShows = await getDiscoverShows();
    setShows(discoveredShows);
  }

  React.useEffect(() => {
    refreshShows();
  }, []);

  return (
    <List>
      {shows.map(show => (
        <ItemWrapper key={`${show.id}`}>
          <Item
            alt={`${show.title}`}
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          />
        </ItemWrapper>
      ))}
    </List>
  );
};

export default ShowsList;
