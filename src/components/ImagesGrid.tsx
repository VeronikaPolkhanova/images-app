import React from "react";
import styled from "styled-components";

interface IImage {
  id: number;
  url: string;
  title: string;
}

interface ImagesGridProp {
  images: [IImage];
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const ImagesGrid = (props: ImagesGridProp) => {
  return (
    <StyledGrid>
      {props.images.map(({ url, title }) => (
        <img src={url} alt={title} />
      ))}
    </StyledGrid>
  );
};

export default ImagesGrid;
