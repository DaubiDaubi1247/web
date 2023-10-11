import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {MonsterArray, MonsterClassState} from "../types/monsterTypes";


const initialState: MonsterClassState = {
    monsterClassArr : null,
    createdNewMonsterClass : false,
    createdNewMonster : false,
    idCurrentClass : null,
}

export const monsterSlice = createSlice({
    name: 'monster',
    initialState,
    reducers: {
        setCreatedNewMonsterClass: (state, action: PayloadAction<boolean>) => {
            state.createdNewMonsterClass = action.payload
        },
        setCreatedNewMonster: (state, action: PayloadAction<boolean>) => {
            state.createdNewMonster = action.payload
        },
        setIdCurrentClass: (state, action: PayloadAction<number>) => {
            state.idCurrentClass = action.payload
        },
        setMonsterClassArray: (state, action : PayloadAction<MonsterArray>) => {
            state.monsterClassArr = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {setCreatedNewMonsterClass,setCreatedNewMonster,setIdCurrentClass, setMonsterClassArray} = monsterSlice.actions

export default monsterSlice.reducer