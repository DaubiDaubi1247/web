import React, { ReactNode} from 'react';
import {useDeleteMonsterClassMutation} from "../../../services/witcher";
import {useAppDispatch} from "../../../app/hooks";
import {setCreatedNewMonster} from "../../../features/monster/monsterSlice";

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

    return (
        <div>
            {Card}
            <button onClick={deleteClassHandler}>Удалить класс</button>
        </div>
    )
}

export default MonsterCardWithDelete;