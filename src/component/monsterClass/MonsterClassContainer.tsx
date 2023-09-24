import React from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch} from "../../app/hooks";
import MonsterCardContainer from "../../common/monsterCard/MonsterCardContainer";
import {HeaderNavPath} from "../../common/navPath/header/HeaderNavPath";


const MonsterClassContainer = () => {

    const { data, error, isLoading } = useGetAllMonsterClassQuery();

    if (!data) {
        return <span>error</span>
    }

    return <MonsterCardContainer monsterList={data} linkTo={HeaderNavPath.MONSTERS_BY_CLASS}/>
};


export default MonsterClassContainer;