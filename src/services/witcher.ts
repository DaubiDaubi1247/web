// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ApiUrls, BASE_URL, MONSTER_CLASS_URL, MONSTER_URL} from "../api/apiConfig";
import {MonsterArray, MonsterInfoById} from "../features/types/monsterTypes";
import {InputsFields} from "./types";

// Define a service using a base URL and expected endpoints
export const witcherApi = createApi({
    reducerPath: 'witcherApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        uploadMonsterClass: builder.mutation<void, InputsFields>({
            query: (monsterClassInfo) => ({
                url: MONSTER_CLASS_URL + `?name=${monsterClassInfo.monsterClassName}`,
                method: 'POST',
                body : monsterClassInfo.monsterClassFormData,
            }),
        }),
        putMonsterClass: builder.mutation<void, InputsFields & {id : number}>({
            query: (monsterClassInfo) => ({
                url: MONSTER_CLASS_URL + `/${monsterClassInfo.id}?name=${monsterClassInfo.monsterClassName}`,
                method: 'PUT',
                body : monsterClassInfo.monsterClassFormData,
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

        deleteMonsterClass: builder.mutation<boolean, Number>({
            query: (monsterClassId) => ({
                url: MONSTER_CLASS_URL + `/${monsterClassId}`,
                method: "DELETE"
            }),
        }),

        createMonsterByClass: builder.mutation<void, InputsFields & {id : number}>({
            query: (monsterClassInfo) => ({
                url: MONSTER_URL + `/${monsterClassInfo.id}`,
                method: 'POST',
                body : monsterClassInfo.monsterClassFormData,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadMonsterClassMutation, useGetAllMonsterClassQuery, useGetAllMonsterByClassQuery
, useGetMonsterInfoByIdQuery,usePutMonsterClassMutation, useDeleteMonsterClassMutation, useCreateMonsterByClassMutation} = witcherApi