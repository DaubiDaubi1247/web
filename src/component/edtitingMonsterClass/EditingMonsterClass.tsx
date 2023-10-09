import React  from 'react';
import MonsterCard from "../monsterCard/MonsterCard";
import {MonsterArray, WithDataFromServer} from "../../features/types/monsterTypes";
import MonsterCardWithDelete from "./monsterCardWtihDelete/MonsterCardWithDelete";



interface MonsterCardContainerProps extends WithDataFromServer{
    opeModal : (value : boolean) => void
}

const EditingMonsterClass :React.FC<MonsterCardContainerProps> = ({data, opeModal}) => {

    const monsterCardList = (data as MonsterArray).map(monsterItem =>
        <MonsterCardWithDelete Card={<MonsterCard monsterInfo={monsterItem}/>} idForDelete={monsterItem.id} opeModal={opeModal}/>)

    return (
        <div className="flex justify-center flex-wrap">
            {monsterCardList}
        </div>
    );
}

export default EditingMonsterClass;