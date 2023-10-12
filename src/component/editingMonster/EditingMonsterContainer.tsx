import React from 'react';
import {
    useCreateMonsterByClassMutation,
    useGetAllMonsterClassQuery,
} from "../../services/witcher";
import { SubmitHandler } from 'react-hook-form';

import CommonFormForMonster from '../common/commonFormForMonster/CommonFormForMonster';
import { MonsterInfo } from '../common/commonFormForMonster/formTypes';
import {useAppDispatch} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const EditingMonsterContainer : React.FC = () => {

    const dispatch = useAppDispatch();

    const { data} = useGetAllMonsterClassQuery();
    const [triggerForCreate] = useCreateMonsterByClassMutation()
    
    const onSubmitCreated: SubmitHandler<MonsterInfo> = async data => {
        const formData = new FormData();
        formData.append("monsterImg", data.monsterClassImg[0])
        formData.append("name", data.monsterClassName)
        formData.append("quote", data.quote)
        formData.append("quoteAuthor", data.quoteAuthor)
        formData.append("description", data.description)


        try {
            await triggerForCreate({monsterClassName : data.monsterClassName, monsterClassFormData : formData, id : data.classId}).unwrap()
            toast.success('Монстр успешно создан', {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setCreatedNewMonster(true))
        } catch (error) {
            //@ts-ignore
            toast.error(error.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <>
            <CommonFormForMonster
                submitButtonText="Создать монстра"
                onSubmit={onSubmitCreated}
                monsterClassArr={data}
            />
            {/* {withErrorAndLoadingHandling(EditingMonsterClass)({data : data, isLoading : isLoading, opeModal : setModalIsVisible})}

            <ModalFormPutClass 
                modalIsOpen={modalIsVisible}
                closeModal={setModalIsVisible}
                onSubmit={onSubmitCreated}
                submitButtonText="Обновить класс"
                requiredClassName={false}
            /> */}

            <ToastContainer/>
        </>
    );
}

export default EditingMonsterContainer;