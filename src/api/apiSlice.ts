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
  }),

  endpoints: (build) => ({
    authUser: build.mutation({
      query: ({ email, password }) => ({
        url: "/auth",
        method: "POST",
        body: { email, password },
      }),
    }),

    fetchImages: build.query({
      query: () => ({
        url: "/photos",
        method: "GET",
      }),
    }),

    postComment: build.mutation({
      query: ({ id, text, userId }) => ({
        url: `/photos/${id}/comments`,
        method: "POST",
        body: { text, userId },
      }),
    }),

    deleteComment: build.mutation({
      query: ({ id, commentId }) => ({
        url: `/photos/${id}/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
  }),
});
