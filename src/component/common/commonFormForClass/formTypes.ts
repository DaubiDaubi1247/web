import { SubmitHandler } from "react-hook-form";

export interface ClassFormProps {
    onSubmit : SubmitHandler<FormFieldsClass>
    submitButtonText : string
    requiredClassName : boolean

}

export type FormFieldsClass = {
    monsterClassName: string,
    monsterClassImg: FileList,
};