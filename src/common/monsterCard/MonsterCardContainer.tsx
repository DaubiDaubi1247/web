import React, {useEffect} from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch} from "../../app/hooks";
import MonsterCard from "./MonsterCard";
import {MonsterClassArray} from "../../features/types/monsterTypes";

interface MonsterCardContainerProps {
    monsterList : MonsterClassArray
}

const MonsterCardContainer :React.FC<MonsterCardContainerProps> = ({monsterList}) => {

    const { data, error, isLoading } = useGetAllMonsterClassQuery();
    const dispatch = useAppDispatch()

     const monsterCardList = monsterList.map(monsterItem => <MonsterCard imgSource={monsterItem.source + monsterItem.imgName} title={monsterItem.name}/>)

    return (
        <div className="flex">
            {monsterCardList}
        </div>
    );
}

export default MonsterCardContainer;