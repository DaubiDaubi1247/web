import React, {useEffect} from 'react';
import CreateMonsterForm from "./createMonsterClassForm/CreateMonsterForm";
import {
    useGetAllMonsterClassQuery,
} from "../../services/witcher";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";
import EditingMonsterClass from "./EditingMonsterClass";
import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";
import ModalFormPutClass from "./modalFormPutClass/ModalFormPutClass";

const EditingMonsterClassContainer :React.FC = () => {

    const  modalIsVisible = useAppSelector(state => state.monsterClass.updatedMonsterClass);

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

            <div>
                <ModalFormPutClass modalIsOpen={modalIsVisible}/>
            </div>
        </>
    );
}

export default EditingMonsterClassContainer;