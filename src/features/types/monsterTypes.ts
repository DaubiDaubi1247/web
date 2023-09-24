export interface MonsterItem {
    name : string,
    imgName : string,
    source : string,
    id : number,
}

export type MonsterArray = Array<MonsterItem>

export interface MonsterClassState {
    monsterClassArr : MonsterArray | null
}