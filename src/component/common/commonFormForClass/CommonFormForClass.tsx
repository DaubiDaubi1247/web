import { useForm } from "react-hook-form";
import { ClassFormProps, FormFieldsClass } from "./formTypes";
import { Form } from "react-bootstrap";
import StyledButton from "../button/StyledButton";
import React from "react";

const CommonFormForClass : React.FC<ClassFormProps> = ({onSubmit, submitButtonText,
                                                       requiredClassName}) => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormFieldsClass>();

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
                    {...register("monsterClassName",{ required: requiredClassName })}
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
                {errors.monsterClassImg && <span className="text-red">This field is required</span>}
            </Form.Group>
            <StyledButton type={"submit"}>{submitButtonText}</StyledButton>
        </Form>

    );
}
 
export default CommonFormForClass;