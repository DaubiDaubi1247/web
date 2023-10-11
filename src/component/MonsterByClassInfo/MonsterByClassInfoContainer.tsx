
import {useParams} from "react-router-dom";
import {useGetAllMonsterByClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";

import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";
import {useEffect} from "react";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

const MonsterByClassInfoContainer = () => {
    const { id } = useParams();
    const createdNewMonster = useAppSelector(state => state.monsterClass.createdNewMonster)
    const dispatch = useAppDispatch()

    const {data, isLoading, refetch} = useGetAllMonsterByClassQuery(Number(id));

    useEffect(() => {
        if (createdNewMonster) {
            refetch();
            dispatch(setCreatedNewMonster(false))
        }
    }, [createdNewMonster]);

    return withErrorAndLoadingHandling(MonsterCardContainer)({data : data, isLoading : isLoading,
            linkTo: NavPath.MONSTERS_BY_CLASS + id + "/monsterId/"})
};

export default MonsterByClassInfoContainer;