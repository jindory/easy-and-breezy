"use strict";
//함수의 기본적인 타입 선언
function fcSum(a, b) {
    //매개변수와, 함수의 반환 값에 타입 추가
    return a + b;
}
//함수의 인자는 모두 필수 값으로 간주🥸
// function fcSums(a:number, b:number): number{
//     return a+b;
// }
// fcSums(10, 20);
// fcSums(10, 20, 30); //error
// fcSums(10); //error
//함수의 인자에 `?`를 이용해서 특성을 살릴 수 있음
function fcSums(a, b) {
    return a + (b !== null && b !== void 0 ? b : 20); //값에도 넣어줘야 항다..ㄷ-ㄷ;;;;🤔
}
// fcSums(10, 20);
// fcSums(10, 20, 30); //error
console.log(fcSums(10));
//REST 문법이 적용된 매개변수
function sum(a, ...nums) {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
let vm = {
    el: "#app",
    count: 10,
    init: function () {
        return () => {
            return this.count;
        };
    },
};
let getCount = vm.init();
let count = getCount();
// console.log(count);
