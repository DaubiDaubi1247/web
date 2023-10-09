import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";

import {usePutMonsterClassMutation} from "../../../services/witcher";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setCreatedNewMonster, setUpdatedMonsterClass} from "../../../features/monster/monsterSlice";
import StyledButton from "../../button/StyledButton";

type FormFields = {
    monsterClassName: string,
    monsterClassImg: FileList,
};

const ModalForMPutClass = () => {
    const { 
            register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm<FormFields>();

    const [ triggerForUpload] = usePutMonsterClassMutation();
    const idForUpdateClass = useAppSelector(state => state.monsterClass.idCurrentClass);

    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<FormFields> = async data => {
        const formData = new FormData();
        formData.append("classImg", data.monsterClassImg[0])

        await triggerForUpload({monsterClassName : data.monsterClassName, monsterClassImg : formData, id : Number(idForUpdateClass)})
        dispatch(setUpdatedMonsterClass(false));
        dispatch(setCreatedNewMonster(true));
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 py-3 mt-5 w-2/4 m-auto">
            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Label className="block">Имя класса</Form.Label>
                <Form.Control
                    className="rounded-md pl-1 text-black"
                    type="text"
                    placeholder="Введите имя класса"
                    {...register("monsterClassName",{ required: true })}
                />
                {errors.monsterClassName && <span className="text-white">This field is required</span>}
            </Form.Group>

            <Form.Group
                controlId="formFile"
                className="mb-3"
            >
                <Form.Label className="block mb-3">Вставьте картинку класса</Form.Label>
                <Form.Control
                    as="input"
                    type="file"
                    {...register("monsterClassImg", { required: true })}
                />
                {errors.monsterClassImg && <span className="text-white">This field is required</span>}
            </Form.Group>
            <StyledButton type={"submit"}>Обновить класс</StyledButton>
        </Form>

    );
};

export default ModalForMPutClass;