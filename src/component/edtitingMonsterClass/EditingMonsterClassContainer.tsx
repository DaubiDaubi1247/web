import React, {useEffect} from 'react';
import CreateMonsterForm from "./createMonsterClassForm/CreateMonsterForm";
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";
import EditingMonsterClass from "./EditingMonsterClass";
import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";

const EditingMonsterClassContainer :React.FC = () => {

    const { data, refetch, isLoading } = useGetAllMonsterClassQuery();

    const createdNewMonster = useAppSelector(state => state.monsterClass.createdNewMonsterClass)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (createdNewMonster) {
            refetch();
            dispatch(setCreatedNewMonster(false))
        }

    },[createdNewMonster])

    return (
        <>
            <CreateMonsterForm/>
            {withErrorAndLoadingHandling(EditingMonsterClass)({data : data, isLoading : isLoading})}
        </>
    );
}

export default EditingMonsterClassContainer;