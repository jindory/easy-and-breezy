let str: string = 'hello';
let num: number = 10;
let arr: Array<number> = [1,2,3]; 
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];



//TS 튜플 - 배열 내 인덱스 타입까지 정의
let address: [string, number] = ['gangnam', 100];

//TS 객체
let obj:object = {};
// let person: object = {
//     name: 'capt',
//     age: 100,
// };

let person: { name:string, age:number} = {
    name: 'thor',
    age: 1000
}


//TS 진위값
let show:boolean = true;
