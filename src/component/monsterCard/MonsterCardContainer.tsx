import React  from 'react';
import MonsterCard from "./MonsterCard";
import {MonsterArray, WithDataFromServer} from "../../features/types/monsterTypes";

interface MonsterCardContainerProps extends WithDataFromServer{
    linkTo : string
}

const MonsterCardContainer :React.FC<MonsterCardContainerProps> = ({data, linkTo}) => {

    const monsterCardList = (data as MonsterArray).map(monsterItem => <MonsterCard monsterInfo={monsterItem} linkTo={linkTo}/>)

    return (
        <div className="flex justify-center flex-wrap">
            {monsterCardList}
        </div>
    );
}

export default MonsterCardContainer;