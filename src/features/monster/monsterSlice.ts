import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {AuthTypes} from "../types/authTypes";
import {MonsterClassState} from "../types/monsterTypes";


const initialState: MonsterClassState = {
    monsterClassArr : null
}

export const monsterSlice = createSlice({
    name: 'monster',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const {} = monsterSlice.actions

export default monsterSlice.reducer