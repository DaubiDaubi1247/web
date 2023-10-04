import React from 'react';
import {ApiUrls} from "../../api/apiConfig";
import {MonsterInfoById, WithDataFromServer} from "../../features/types/monsterTypes";

const MonsterInfo : React.FC<WithDataFromServer> = ({data}) => {

    const monsterInfoData = data as MonsterInfoById

    return (
        <div className=" bg-gray-700 pb-4">
            <div className="w-2/4 m-auto">
                <img src={ApiUrls.IMG + monsterInfoData.source + monsterInfoData.imgName} alt="" className="max-w-[500px] m-auto"/>
                <h1 className="text-4xl font-bold my-4">{monsterInfoData.name}</h1>
                <p className="italic my-4">{monsterInfoData.quote} <span>" {monsterInfoData.quoteAuthor} "</span> </p>
                <p>{monsterInfoData.description}</p>
            </div>
        </div>
    );
};

export default MonsterInfo;