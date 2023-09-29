import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import {useUploadMonsterClassMutation} from "../../services/witcher";
import {FormControl, FormLabel, Input, TextField} from "@mui/material";
import {useAppDispatch} from "../../app/hooks";
import {setCreatedNewMonster} from "../../features/monster/monsterSlice";


type InputsFields = {
    monsterClassName: string,
    monsterClassImg: FileList,
};

const CreateMonsterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsFields>();
    const [ trigger, error] = useUploadMonsterClassMutation()

    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<InputsFields> = data => {
        const formData = new FormData();
        formData.append("classImg", data.monsterClassImg[0])

        trigger({monsterClassName : data.monsterClassName, monsterClassImg : formData})
        dispatch(setCreatedNewMonster(true));
    }

    return (
            <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 py-3 mt-5 w-2/4 m-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="block">Имя класса</Form.Label>
                    <Form.Control
                        className="rounded-md pl-1 text-black"
                        type="text"
                        placeholder="Введите имя класса"
                        {...register("monsterClassName")}
                    />
                    {errors.monsterClassName && <span>This field is required</span>}
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="block mb-3">Вставьте картинку класса</Form.Label>
                    <Form.Control
                        as="input"
                        type="file"
                        {...register("monsterClassImg")}
                    />
                </Form.Group>
                <Button className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded" type="submit">
                    Создать класс
                </Button>
            </Form>

    );
};

export default CreateMonsterForm;