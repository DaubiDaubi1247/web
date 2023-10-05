
import {useGetAllMonsterClassQuery} from "../../services/witcher";
import MonsterCardContainer from "../monsterCard/MonsterCardContainer";
import {NavPath} from "../../common/navPath/NavPath";


import withErrorAndLoadingHandling from "../HOC/withError/withErrorAndLoadingHandling";


const MonsterClassContainer = () => {

    const { data, isLoading } = useGetAllMonsterClassQuery();

    return withErrorAndLoadingHandling(MonsterCardContainer)({data : data, isLoading : isLoading,  linkTo : NavPath.MONSTERS_BY_CLASS})
};


export default MonsterClassContainer;