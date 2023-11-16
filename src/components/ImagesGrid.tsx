import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImagesGridProps } from "../types";

const StyledGrid = styled.div`
  column-count: 3;
  column-gap: 20px;
  text-align: justify;
`;

const GridItem = styled.li`
  list-style: none;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ImagesGrid = (props: ImagesGridProps) => {
  return (
    <StyledGrid>
      {props.images.map(({ id, url, title }) => (
        <Link key={id} to={`/${id}`}>
          <GridItem>
            <img src={url} alt={title} />
          </GridItem>
        </Link>
      ))}
    </StyledGrid>
  );
};

export default ImagesGrid;
