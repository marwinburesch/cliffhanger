import React from "react";
import styled from "@emotion/styled";

const ItemWrapper = styled.div`
  flex-basis: 30%;
  margin: 10px;
  overflow: hidden;
`;

const Item = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const MissingImage = styled.div`
  text-align: center;
  width: 100%;
  color: ${props => props.theme.primarytext};
`;

const Show = ({ show }) => {
  return (
    <ItemWrapper>
      {show.poster_path && (
        <Item
          alt={`${show.title}`}
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
        />
      )}
      {!show.poster_path && <h2>{show.name}</h2>}
      {!show.poster_path && <MissingImage>no image! ¯\_(ツ)_/¯</MissingImage>}
    </ItemWrapper>
  );
};

export default Show;
