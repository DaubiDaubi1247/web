import React from 'react';
import {useParams} from "react-router-dom";
import {useGetAllMonsterByClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";


const MonsterByClassInfoContainer = () => {
    const { id } = useParams();

    const {data} = useGetAllMonsterByClassQuery(Number(id));

    if (!data) {
        return <span>error</span>
    }

    return <MonsterCardContainer monsterList={data} linkTo={NavPath.MONSTERS_BY_CLASS + id + "/monsterId/"}/>
};

export default MonsterByClassInfoContainer;