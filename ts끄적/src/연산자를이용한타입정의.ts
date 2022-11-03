//Union Type
//문자열 타입이나 숫자 타입이 모두 올 수 있다.
function logText(text: string | number) {}

//Intersection Type
interface Person {
  name: string;
  age: number;
}

interface Develope {
  name: string;
  skill: number;
}
type Capt = Person & Developer;
// {
//     name:string;
//     age:number;
//     skill:string;
// }
