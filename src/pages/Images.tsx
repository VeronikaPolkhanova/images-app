import React from "react";

import Page from "../components/Page";
import Error from "../components/Error";
import ImagesGrid from "../components/ImagesGrid";

import { fetchImages } from "../api/apiSlice";

function Images() {
  const {
    data: images,
    isLoading,
    error: errorMessage,
  } = fetchImages.useFetchAllImagesQuery({});

  if (errorMessage) {
    return <Error>Something went wrong</Error>;
  }

  return (
    <Page>{isLoading ? "Loading" : <ImagesGrid images={images?.data} />}</Page>
  );
}

export default Images;
