import { SubmitHandler } from "react-hook-form";
import { FormFieldsClass } from "../commonFormForClass/formTypes";
import { MonsterArray } from "../../../features/types/monsterTypes";

export interface MonsterInfo extends FormFieldsClass {
    quote : string
    quoteAuthor : string
    description : string
    classId : number
}


export interface MonsterFormProps {
    onSubmit : SubmitHandler<MonsterInfo>
    submitButtonText : string
    monsterClassArr : MonsterArray | undefined
}