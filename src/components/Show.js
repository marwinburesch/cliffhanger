import React from "react";
import styled from "@emotion/styled";

const ItemWrapper = styled.div`
  flex-basis: 30%;
  margin: 10px;
  overflow: hidden;
`;

const Item = styled.img`
  height: 135px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Show = ({ show }) => {
  return (
    <ItemWrapper>
      <Item
        alt={`${show.title}`}
        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
      />
    </ItemWrapper>
  );
};

export default Show;
