
import {useParams} from "react-router-dom";
import {useGetAllMonsterByClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";

import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";

const MonsterByClassInfoContainer = () => {
    const { id } = useParams();

    const {data, isLoading} = useGetAllMonsterByClassQuery(Number(id));

    return withErrorAndLoadingHandling(MonsterCardContainer)({data : data, isLoading : isLoading,
            linkTo: NavPath.MONSTERS_BY_CLASS + id + "/monsterId/"})
};

export default MonsterByClassInfoContainer;