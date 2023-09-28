import React from 'react';
import {useGetMonsterInfoByIdQuery} from "../../services/witcher";
import {useParams} from "react-router-dom";
import MonsterInfo from "./MonsterInfo";



const MonsterInfoContainer = () => {

    const {id} = useParams();

    const {data} = useGetMonsterInfoByIdQuery(Number(id));

    if (!data) {
        return <span>error</span>
    }

    return <MonsterInfo {...data}/>
};


export default MonsterInfoContainer;