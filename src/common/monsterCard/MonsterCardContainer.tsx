import React, {useEffect} from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch} from "../../app/hooks";
import MonsterCard from "./MonsterCard";
import {MonsterArray} from "../../features/types/monsterTypes";

interface MonsterCardContainerProps {
    monsterList : MonsterArray,
    linkTo : string
}

const MonsterCardContainer :React.FC<MonsterCardContainerProps> = ({monsterList, linkTo}) => {

    const monsterCardList = monsterList.map(monsterItem => <MonsterCard monsterInfo={monsterItem} linkTo={linkTo}/>)

    return (
        <div className="flex">
            {monsterCardList}
        </div>
    );
}

export default MonsterCardContainer;