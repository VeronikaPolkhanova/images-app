import React from "react";

import ImagesGrid from "../components/ImagesGrid";
import Page from "../components/Page";
import { Error } from "../components/Messages";

import { api } from "../api/apiSlice";

function Images() {
  const {
    data: images,
    isLoading,
    error: errorMessage,
  } = api.useFetchAllImagesQuery({});

  if (errorMessage) {
    return <Error>Something went wrong</Error>;
  }

  return (
    <Page>{isLoading ? "Loading" : <ImagesGrid images={images?.data} />}</Page>
  );
}

export default Images;
