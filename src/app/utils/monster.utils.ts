export enum MonsterType {
    PLANT = "plant",
    ELECTRIC="electric",
    FIRE="fire",
    WATER="water",
    
}
export interface IMonsterProproties {
    imageUrl: string;
    color: string;
}
export const MonsterTypeProproties:{[key:string]:IMonsterProproties} = {
    [MonsterType.PLANT]: {
        imageUrl:'assets/img/plant.jpg',
        color:'rgba(255, 255, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl:'assets/img/water.jpg',
        color:'rgba(255, 104, 104)'
    },
    [MonsterType.FIRE]: {
        imageUrl:'assets/img/fire.jpg',
        color:'rgba(118, 235, 124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl:'assets/img/electric.jpeg',
        color:'rgba(118, 235, 124)'
    },

}