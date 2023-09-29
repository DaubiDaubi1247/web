import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {MonsterClassState} from "../types/monsterTypes";


const initialState: MonsterClassState = {
    monsterClassArr : null,
    createdNewMonsterClass : false,
}

export const monsterSlice = createSlice({
    name: 'monster',
    initialState,
    reducers: {
        setCreatedNewMonster: (state, action: PayloadAction<boolean>) => {
            state.createdNewMonsterClass = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setCreatedNewMonster} = monsterSlice.actions

export default monsterSlice.reducer