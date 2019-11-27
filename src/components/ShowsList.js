import React from "react";
import styled from "@emotion/styled";
import Show from "./Show";

const List = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;

const ShowsList = ({ shows }) => {
  return (
    <List>
      {shows && shows.map(show => <Show show={show} key={show.id} />)}
    </List>
  );
};

export default ShowsList;
