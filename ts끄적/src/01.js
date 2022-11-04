"use strict";
//String
const str = "hi";
//Number
const num = 10;
//Boolean
const isLoggedIn = false;
//Array
const arr = [1, 2, 3];
const newArr = [1, 2, 3]; //제네릭
//Tuple - 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
const arrTuple = ["hi", 10];
// arrTuple[1].concat("!"); // Error, 'number' does not have 'concat'
arrTuple[0].concat("!");
// arrTuple[1] = 'hi';  // Error, Property '5' does not exist on type '[string, number]'.
arrTuple[1] = 10;
//Enum - 특정 값들의 집합
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 2] = "Capt";
    Avengers[Avengers["IronMan"] = 3] = "IronMan";
    Avengers[Avengers["Thor"] = 4] = "Thor";
})(Avengers || (Avengers = {}));
// const hero: Avengers = Avengers.Capt;
const hero = Avengers.Capt;
// console.log(hero);
// Any 기존에 자바스크립트로 구현되어 있는 코드에 점진적으로 적용할 때 활용하면 좋다냥
let strr = "hi";
let numm = 10;
let arrr = ["a", 2, true];
// console.log(strr, numm, arrr);
// Void 변수에는 undefine와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
let unuseful = undefined;
function notuse() {
    console.log("sth");
}
// Never 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입🤔
function neverEnd() {
    while (true) { }
}
