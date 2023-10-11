import { useForm } from "react-hook-form";
import { MonsterFormProps, MonsterInfo } from "./formTypes";
import { Form } from "react-bootstrap";
import StyledButton from "../button/StyledButton";
import React from "react";

const CommonFormForMonster: React.FC<MonsterFormProps> = ({ onSubmit, submitButtonText,
     monsterClassArr }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<MonsterInfo>();

    const classOptions = monsterClassArr?.map(el =>
        <option className={"text-black"} value={el.id}>{el.name}</option>);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 py-3 mt-5 w-2/4 m-auto">

            <Form.Group controlId="selectClass">
                <Form.Label>Выберите класс монстра</Form.Label>
                <Form.Select
                    className={"block m-auto bg-inherit"}
                    {...register("classId", { required: true })}
                >
                    {classOptions}
                </Form.Select>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Label className="block">Имя монстра</Form.Label>
                <Form.Control
                    className="rounded-md pl-1 text-black"
                    type="text"
                    placeholder="Введите имя монстра"
                    {...register("monsterClassName", { required: true })}
                />
                {errors.monsterClassName && <span className="text-white">This field is required</span>}
            </Form.Group>

            <Form.Group
                controlId="formFile"
                className="mb-3"
            >
                <Form.Label className="block mb-3">Вставьте картинку монстра</Form.Label>
                <Form.Control
                    as="input"
                    type="file"
                    {...register("monsterClassImg", { required: true })}
                />
                {errors.monsterClassImg && <span className="text-red">This field is required</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="quote">
                <Form.Label>Введите цитату о монстре</Form.Label>
                <Form.Control 
                    className="m-auto"
                    as="textarea" 
                    rows={3}
                    {...register("quote", { required: true })} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="qupteAuthor">
                <Form.Label>Введите автора цитаты</Form.Label>
                <Form.Control 
                    className="m-auto"
                    as="textarea" 
                    rows={3}
                    {...register("quoteAuthor", { required: true })} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Введите описание монстра</Form.Label>
                <Form.Control 
                    className="m-auto"
                    as="textarea" 
                    rows={3}
                    {...register("description", { required: true })} 
                />
            </Form.Group>
            <StyledButton type={"submit"}>{submitButtonText}</StyledButton>
        </Form>

    );
}

export default CommonFormForMonster;