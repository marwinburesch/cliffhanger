import React from "react";
import styled from "@emotion/styled";
import Show from "./Show";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const ShowsList = ({ shows }) => {
  return (
    <List>
      {shows && shows.map(show => <Show show={show} key={show.id} />)}
    </List>
  );
};

export default ShowsList;
