"use strict";
// 인터페이스란 상호 간에 약속 혹은 규칙!
function logAge(obj) {
    console.log(obj.age);
}
let person = { name: "Capt", age: 30 };
let myBeer = {
    name: "Saporo",
};
function brewBeer(beer) {
    console.log(beer.name);
    //console.log(beer.name, beer.hop);
}
brewBeer(myBeer);
let myBeerList = {
    brand: "Belgian Monk",
};
// myBeerList.brand = 'Korean Carpenter'; //에러가 난다.
//읽기 전용 배열
let arrRead = [1, 2, 3];
let loginUser;
loginUser = function (id, pw) {
    console.log("로그인 했습니다");
    return true;
};
console.log(loginUser("abc", "abc"));
class myBeerClass {
    constructor() {
        this.beerName = "Baby Guinness";
    }
    nameBeer(b) {
        this.beerName = b;
    }
}
let fe = {};
fe.namee = "josh";
fe.skill = "TypeScript";
console.log(fe.name, fe.skill);
let feList = {};
feList.namee = "josh";
feList.skill = "Ts";
feList.drink = "Beer";
console.log(feList.namee, feList.skill, feList.drink);
