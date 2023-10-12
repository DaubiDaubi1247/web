import React, {useEffect, useState} from 'react';
import {
    useGetAllMonsterClassQuery, usePutMonsterClassMutation, useUploadMonsterClassMutation,
} from "../../services/witcher";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCreatedNewMonsterClass} from "../../features/monster/monsterSlice";
import EditingMonsterClass from "./EditingMonsterClass";
import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";
import ModalFormPutClass from "./modalFormPutClass/ModalFormPutClass";
import CommonFormForClass from '../common/commonFormForClass/CommonFormForClass';
import { SubmitHandler } from 'react-hook-form';
import { FormFieldsClass } from '../common/commonFormForClass/formTypes';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditingMonsterClassContainer :React.FC = () => {

    const [modalIsVisible, setModalIsVisible] = useState(false)

    const { data, refetch, isLoading } = useGetAllMonsterClassQuery();

    const createdNewMonster = useAppSelector(state => state.monsterClass.createdNewMonsterClass)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (createdNewMonster) {
            refetch();
            dispatch(setCreatedNewMonsterClass(false))
        }

    },[createdNewMonster])

    const [ triggerForUpload] = useUploadMonsterClassMutation()

    const onSubmit: SubmitHandler<FormFieldsClass> = async data => {
        const formData = new FormData();
        formData.append("classImg", data.monsterClassImg[0])

        try {
            await triggerForUpload({monsterClassName : data.monsterClassName, monsterClassFormData : formData}).unwrap()
            toast.success('Класс успешно создан', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setCreatedNewMonsterClass(true));
        } catch (error) {
            //@ts-ignore
            toast.error(error.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            }
        }


    const [ triggerForUpdate] = usePutMonsterClassMutation();
    const idForUpdateClass = useAppSelector(state => state.monsterClass.idCurrentClass);

    const onSubmitUpdate: SubmitHandler<FormFieldsClass> = async data => {
        const formData = new FormData();
        formData.append("classImg", data.monsterClassImg[0])

        try {
            await triggerForUpdate({monsterClassName : data.monsterClassName, monsterClassFormData : formData, id : Number(idForUpdateClass)}).unwrap()
            toast.success('Класс успешно обновлен', {
                position: toast.POSITION.TOP_RIGHT
            });
            setModalIsVisible(false);
            dispatch(setCreatedNewMonsterClass(true));
        } catch (error) {
            //@ts-ignore
            toast.error(error.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <>
            <CommonFormForClass
                submitButtonText="Создать класс"
                onSubmit={onSubmit}
                requiredClassName={false}
            />
            {withErrorAndLoadingHandling(EditingMonsterClass)({data : data, isLoading : isLoading, opeModal : setModalIsVisible})}

            <ModalFormPutClass 
                modalIsOpen={modalIsVisible}
                closeModal={setModalIsVisible}
                onSubmit={onSubmitUpdate}
                submitButtonText="Обновить класс"
                requiredClassName={false}
            />

            <ToastContainer/>
        </>
    );
}

export default EditingMonsterClassContainer;