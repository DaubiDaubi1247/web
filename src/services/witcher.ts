// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UserInfo} from "../features/types/authTypes";
import {ApiUrls, BASE_URL, MONSTER_URL} from "../api/apiConfig";
import {MonsterArray, MonsterInfoById} from "../features/types/monsterTypes";

// Define a service using a base URL and expected endpoints
export const witcherApi = createApi({
    reducerPath: 'witcherApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        authUser: builder.mutation<Boolean, UserInfo>({
            query: (userInfo) => ({
                url: ApiUrls.AUTH,
                method: 'POST',
                body : userInfo,
            }),
        }),
        getAllMonsterClass: builder.query<MonsterArray, void>({
            query: () => ApiUrls.ALL_MONSTER_CLASS,
        }),
        getAllMonsterByClass: builder.query<MonsterArray, Number>({
            query: (classId) => ApiUrls.ALL_MONSTER_BY_CLASS + classId,
        }),
        getMonsterInfoById: builder.query<MonsterInfoById, Number>({
            query: (monsterId) => MONSTER_URL + `/${monsterId}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAuthUserMutation, useGetAllMonsterClassQuery, useGetAllMonsterByClassQuery
, useGetMonsterInfoByIdQuery} = witcherApi