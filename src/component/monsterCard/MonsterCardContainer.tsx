import React  from 'react';
import MonsterCard from "./MonsterCard";
import {MonsterArray, WithDataFromServer} from "../../features/types/monsterTypes";
import {Link} from "react-router-dom";

interface MonsterCardContainerProps extends WithDataFromServer{
    linkTo : string
}

const MonsterCardContainer :React.FC<MonsterCardContainerProps> = ({data, linkTo}) => {

    const monsterCardList = (data as MonsterArray).map(monsterItem => <Link to={linkTo + monsterItem.id}>
        <MonsterCard monsterInfo={monsterItem}/> </Link>)

    return (
        <div className="flex justify-center flex-wrap">
            {monsterCardList}
        </div>
    );
}

export default MonsterCardContainer;