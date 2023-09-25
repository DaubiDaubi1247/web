import React from 'react';
import {useGetMonsterInfoByIdQuery} from "../../services/witcher";
import {useParams} from "react-router-dom";
import {ApiUrls} from "../../api/apiConfig";

const MonsterInfo = () => {

    const {id} = useParams();

    const {data} = useGetMonsterInfoByIdQuery(Number(id));

    if (!data) {
        return <span>error</span>
    }

    return (
        <>
            <img src={ApiUrls.IMG + data.source + data.imgName} alt=""/>
            <h1>{data.name}</h1>
            <p>{data.quote}</p>
            <p>{data.quoteAuthor}</p>
            <p>{data.description}</p>
        </>
    );
};


export default MonsterInfo;