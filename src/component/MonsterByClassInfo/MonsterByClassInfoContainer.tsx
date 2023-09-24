import React from 'react';
import {useParams} from "react-router-dom";
import {useGetAllMonsterByClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../../common/monsterCard/MonsterCardContainer";
import {HeaderNavPath} from "../../common/navPath/header/HeaderNavPath";


const MonsterByClassInfoContainer = () => {
    const { id } = useParams();

    const {data} = useGetAllMonsterByClassQuery(Number(id));

    if (!data) {
        return <span>error</span>
    }

    return <MonsterCardContainer monsterList={data} linkTo={HeaderNavPath.MONSTERS_BY_CLASS + id + "/"}/>
};

export default MonsterByClassInfoContainer;