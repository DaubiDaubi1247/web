export interface MonsterClassItem {
    name : string,
    imgName : string,
    source : string
}

export type MonsterClassArray = Array<MonsterClassItem>

export interface MonsterClassState {
    monsterClassArr : MonsterClassArray | null
}