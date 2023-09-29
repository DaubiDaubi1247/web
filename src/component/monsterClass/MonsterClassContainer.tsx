import React from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../../common/monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";


const MonsterClassContainer = () => {

    const { data, refetch } = useGetAllMonsterClassQuery();

    if (!data) {
        return <span>error</span>
    }

    return <MonsterCardContainer monsterList={data} linkTo={NavPath.MONSTERS_BY_CLASS}/>
};


export default MonsterClassContainer;