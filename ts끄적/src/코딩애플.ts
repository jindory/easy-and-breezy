// tsconfig.json -> 컴파일

let 변수: string = "kim";
let 냥: string[] = ["kim", "park"];
let 멍: { name?: string } = { name: "park" }; //옵션이에얌
let 이름쓰: string | number = "kim";

//Type alias
type Name = string | number; //대문자로 작성
let 이름쓰쓰: Name = 123;

type Member = [number, boolean];
let joohn: Member = [123, true];

type Members = {
  // name : string
  [key: string]: string;
};
let johnss: Members = { name: "kim" };

function 함수(x: number): number {
  return x * 2;
}

//class
class Uer {
  naming; //미리 변수 만들기
  constructor(naming: string) {
    this.naming = naming;
  }
}
//-ㅅ-?..
