import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ImagesGrid from "../components/ImagesGrid";
import Page from "../components/Page";
import { Error } from "../components/Messages";

import { api } from "../api/apiSlice";

function Images() {
  const {
    data: images,
    isLoading,
    error: errorMessage,
  } = api.useFetchImagesQuery({});

  const navigate = useNavigate();
  const goTo = useCallback((url: string) => navigate(url), [navigate]);

  if (errorMessage) {
    goTo("/login");
    return <Error>Something went wrong</Error>;
  }

  return (
    <Page>{isLoading ? "Loading" : <ImagesGrid images={images?.data} />}</Page>
  );
}

export default Images;
