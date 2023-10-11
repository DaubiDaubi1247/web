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


        await triggerForCreate({monsterClassName : data.monsterClassName, monsterClassFormData : formData, id : data.classId})
        dispatch(setCreatedNewMonster(true))
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
        </>
    );
}

export default EditingMonsterContainer;