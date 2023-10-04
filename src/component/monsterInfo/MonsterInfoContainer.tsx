
import {useGetMonsterInfoByIdQuery} from "../../services/witcher";
import {useParams} from "react-router-dom";
import MonsterInfo from "./MonsterInfo";

import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";



const MonsterInfoContainer = () => {

    const {id} = useParams();

    return withErrorAndLoadingHandling(MonsterInfo)(useGetMonsterInfoByIdQuery(Number(id)))
};


export default MonsterInfoContainer;