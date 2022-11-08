"use strict";
function getText(text) {
    return text;
}
//ㅎ-ㅎ
//테스트
function getSize(arr) {
    return arr.length;
}
const arr1 = [1, 2, 3];
getSize(arr1); //사용할 때 지정해줌
const arr2 = ["1", "2", "3"];
getSize(arr2); //사용할 때 지정해줌
const m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    },
};
// <T extends {name: string}>
