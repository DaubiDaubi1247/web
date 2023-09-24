import React, {useEffect} from 'react';
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch} from "../../app/hooks";
import MonsterCard from "./MonsterCard";

const MonsterCardContainer = () => {

    const { data, error, isLoading } = useGetAllMonsterClassQuery();
    const dispatch = useAppDispatch()

    let monsterCardList;

    if (data !== undefined) {
         monsterCardList = data.map(
            monsterItem => <MonsterCard imgSource={monsterItem.source + monsterItem.imgName} title={monsterItem.name}/>)
    }


    return (
        <div className="d-flex">
            {monsterCardList}
        </div>
    );
}

MonsterCardContainer.propTypes = {};

export default MonsterCardContainer;