import React, { ReactNode} from 'react';
import {useDeleteMonsterClassMutation} from "../../../services/witcher";
import {useAppDispatch} from "../../../app/hooks";
import {setCreatedNewMonster, setIdCurrentClass, setUpdatedMonsterClass} from "../../../features/monster/monsterSlice";
import StyledButton from "../../button/StyledButton";

interface MonsterCardWitDeleteProps {
    Card :  ReactNode,
    idForDelete : number
}

const MonsterCardWithDelete : React.FC<MonsterCardWitDeleteProps> = ({Card, idForDelete}) => {

    const [trigger] = useDeleteMonsterClassMutation();

    const dispatch = useAppDispatch()

    const deleteClassHandler = async () => {
        await trigger(idForDelete);
        dispatch(setCreatedNewMonster(true))
    }

    const updateClassHandler = () => {
        dispatch(setUpdatedMonsterClass(true));
        dispatch(setIdCurrentClass(idForDelete));
    }


    return (
        <div>
            {Card}
            <div className={"flex flex-col mr-2"}>
                <StyledButton className={"mb-2"} type={"button"}  onClick={deleteClassHandler}>Удалить класс</StyledButton>
                <StyledButton type={"button"}  onClick={updateClassHandler}>Обновить класс</StyledButton>
            </div>
        </div>
    )
}

export default MonsterCardWithDelete;