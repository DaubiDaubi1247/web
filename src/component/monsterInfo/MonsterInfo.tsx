import React from 'react';
import {ApiUrls} from "../../api/apiConfig";
import {MonsterInfoById} from "../../features/types/monsterTypes";

const MonsterInfo : React.FC<MonsterInfoById> = (props) => {
    return (
        <>
            <img src={ApiUrls.IMG + props.source + props.imgName} alt=""/>
            <h1>{props.name}</h1>
            <p>{props.quote}</p>
            <p>{props.quoteAuthor}</p>
            <p>{props.description}</p>
        </>
    );
};

export default MonsterInfo;