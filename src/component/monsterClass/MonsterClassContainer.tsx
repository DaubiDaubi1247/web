import {useEffect} from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";

import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";


const MonsterClassContainer = () => {

    const { data, refetch, isLoading } = useGetAllMonsterClassQuery();

    const createdNewMonster = useAppSelector(state => state.monsterClass.createdNewMonsterClass)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (createdNewMonster) {
            refetch();
            dispatch(setCreatedNewMonster(false))
        }

    },[createdNewMonster])

    return withErrorAndLoadingHandling(MonsterCardContainer)({data : data, isLoading : isLoading,  linkTo : NavPath.MONSTERS_BY_CLASS})
};


export default MonsterClassContainer;