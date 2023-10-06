import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {MonsterClassState} from "../types/monsterTypes";


const initialState: MonsterClassState = {
    monsterClassArr : null,
    createdNewMonsterClass : false,
    updatedMonsterClass : false,
    idCurrentClass : null,
}

export const monsterSlice = createSlice({
    name: 'monster',
    initialState,
    reducers: {
        setCreatedNewMonster: (state, action: PayloadAction<boolean>) => {
            state.createdNewMonsterClass = action.payload
        },
        setUpdatedMonsterClass: (state, action: PayloadAction<boolean>) => {
            state.updatedMonsterClass = action.payload
        },
        setIdCurrentClass: (state, action: PayloadAction<number>) => {
            state.idCurrentClass = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setCreatedNewMonster,setUpdatedMonsterClass,setIdCurrentClass} = monsterSlice.actions

export default monsterSlice.reducer