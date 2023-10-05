
import Card from 'react-bootstrap/Card';
import React from "react";
import {ApiUrls} from "../../api/apiConfig";
import {MonsterItem} from "../../features/types/monsterTypes";

interface MonsterCardProps {
    monsterInfo : MonsterItem
}

const MonsterCard : React.FC<MonsterCardProps> = ({monsterInfo}) => {

    const monsterImgUrl = monsterInfo.source + monsterInfo.imgName;

    return (
            <Card style={{ width: '18rem' }} className="bg-gray-700 m-[20px] rounded-md p-2">
                <Card.Img
                    className="h-[350px]"
                    variant="top"
                    src={ApiUrls.IMG + monsterImgUrl}
                />
                <Card.Body>
                    <Card.Title>{monsterInfo.name}</Card.Title>
                </Card.Body>
            </Card>
    );
}

export default MonsterCard;