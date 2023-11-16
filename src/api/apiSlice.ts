import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authUser = createApi({
  reducerPath: "authUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    method: "POST",
  }),
  endpoints: (build) => ({
    fetchAllImages: build.query({
      query: () => ({
        url: "/auth",
      }),
    }),
  }),
});

export const fetchImages = createApi({
  reducerPath: "fetchImages",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    method: "GET",
  }),
  endpoints: (build) => ({
    fetchAllImages: build.query({
      query: () => ({
        url: "/photos",
      }),
    }),
  }),
});
