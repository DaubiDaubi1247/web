import { configureStore } from '@reduxjs/toolkit'
import {witcherApi} from "../services/witcher";
import monsterSlice from "../features/monster/monsterSlice";


export const store = configureStore({
    reducer: {

        [witcherApi.reducerPath]: witcherApi.reducer,

        monsterClass : monsterSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(witcherApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch