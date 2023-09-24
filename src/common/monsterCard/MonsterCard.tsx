import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import {ApiUrls} from "../../api/apiConfig";

interface MonsterCardProps {
    imgSource : string,
    title : string,
}

const MonsterCard : React.FC<MonsterCardProps> = ({imgSource, title}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ApiUrls.IMG + imgSource} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default MonsterCard;