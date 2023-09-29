import React from 'react';
import {ApiUrls} from "../../api/apiConfig";
import {MonsterInfoById} from "../../features/types/monsterTypes";

const MonsterInfo : React.FC<MonsterInfoById> = (props) => {
    return (
        <div className=" bg-gray-700 pb-4">
            <div className="w-2/4 m-auto">
                <img src={ApiUrls.IMG + props.source + props.imgName} alt="" className="max-w-[500px] m-auto"/>
                <h1 className="text-4xl font-bold my-4">{props.name}</h1>
                <p className="italic my-4">{props.quote} <span>" {props.quoteAuthor} "</span> </p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default MonsterInfo;