import { SignUpProps } from "../../interface/SignUpProps";
import { AccessTokenProps } from "./authSliceSample";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      signin: builder.mutation<AccessTokenProps, SignUpProps>({
        query: (credentials) => ({
          url: '/auth/signin',
          method: 'POST',
          body: { ...credentials },
        }),
      }),
    }),
  });