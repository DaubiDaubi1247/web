// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UserInfo} from "../features/types/authTypes";
import {ApiUrls} from "../api/apiConfig";

// Define a service using a base URL and expected endpoints
export const witcherApi = createApi({
    reducerPath: 'witcherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        authUser: builder.mutation<Boolean, UserInfo>({
            query: (userInfo) => ({
                url: ApiUrls.AUTH,
                method: 'POST',
                body : userInfo,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAuthUserMutation } = witcherApi