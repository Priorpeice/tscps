import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => "/member",
    }),
  }),
})

// export hooks
export const { useGetUsersQuery } = apiSlice;