import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "fetchImages",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
    method: "GET",
  }),

  endpoints: (build) => ({
    fetchAllImages: build.query({
      query: () => ({
        url: "/photos",
      }),
    }),

    authUser: build.mutation({
      query: ({ email, password }) => ({
        url: "/auth",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});
