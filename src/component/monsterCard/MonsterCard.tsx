
import Card from 'react-bootstrap/Card';
import React from "react";
import {ApiUrls} from "../../api/apiConfig";
import {Link} from "react-router-dom";
import {MonsterItem} from "../../features/types/monsterTypes";

interface MonsterCardProps {
    monsterInfo : MonsterItem
    linkTo : string
}

const MonsterCard : React.FC<MonsterCardProps> = ({monsterInfo, linkTo}) => {

    const monsterImgUrl = monsterInfo.source + monsterInfo.imgName;

    return (
        <Link to={linkTo + monsterInfo.id}>
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
        </Link>
    );
}

export default MonsterCard;