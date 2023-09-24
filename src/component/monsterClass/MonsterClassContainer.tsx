import React from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch} from "../../app/hooks";
import MonsterCardContainer from "../../common/monsterCard/MonsterCardContainer";


const MonsterClassContainer = () => {

    const { data, error, isLoading } = useGetAllMonsterClassQuery();

    if (!data) {
        return <span>error</span>
    }

    return <MonsterCardContainer monsterList={data}/>
};


export default MonsterClassContainer;