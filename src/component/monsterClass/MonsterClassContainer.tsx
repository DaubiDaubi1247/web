import React, {useEffect} from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../../common/monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";


const MonsterClassContainer = () => {

    const { data, refetch } = useGetAllMonsterClassQuery();

    const createdNewMonster = useAppSelector(state => state.monsterClass.createdNewMonsterClass)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (createdNewMonster) {
            refetch();
            dispatch(setCreatedNewMonster(false))
        }

    },[createdNewMonster])

    if (!data) {
        return <span>error</span>
    }
    return <MonsterCardContainer monsterList={data} linkTo={NavPath.MONSTERS_BY_CLASS}/>
};


export default MonsterClassContainer;