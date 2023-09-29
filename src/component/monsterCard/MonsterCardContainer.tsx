import React, {useEffect} from 'react';
import MonsterCard from "./MonsterCard";
import {MonsterArray} from "../../features/types/monsterTypes";

interface MonsterCardContainerProps {
    monsterList : MonsterArray,
    linkTo : string
}

const MonsterCardContainer :React.FC<MonsterCardContainerProps> = ({monsterList, linkTo}) => {

    const monsterCardList = monsterList.map(monsterItem => <MonsterCard monsterInfo={monsterItem} linkTo={linkTo}/>)

    return (
        <div className="flex justify-center flex-wrap">
            {monsterCardList}
        </div>
    );
}

export default MonsterCardContainer;