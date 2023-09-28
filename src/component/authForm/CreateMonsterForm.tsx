import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import {useUploadMonsterClassMutation} from "../../services/witcher";


type InputsFields = {
    monsterClassName: string,
    monsterClassImg: FileList,
};

const CreateMonsterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<InputsFields>();
    const [ trigger] = useUploadMonsterClassMutation()
    const onSubmit: SubmitHandler<InputsFields> = data => {
        const formData = new FormData();
        formData.append("classImg", data.monsterClassImg[0])

        trigger({monsterClassName : data.monsterClassName, monsterClassImg : formData})
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя класса</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите имя класса"
                        {...register("monsterClassName")}
                    />
                    {errors.monsterClassName && <span>This field is required</span>}
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Вставьте картинку класса</Form.Label>
                    <Form.Control
                        as="input"
                        type="file"
                        {...register("monsterClassImg")}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default CreateMonsterForm;