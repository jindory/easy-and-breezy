"use strict";
//이넘은 특정 값들의 집합을 의미하는 자료형
//================================= 숫자형 이넘
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//숫자형 이넘 사용하기
var Responsed;
(function (Responsed) {
    Responsed[Responsed["No"] = 0] = "No";
    Responsed[Responsed["Yes"] = 1] = "Yes";
})(Responsed || (Responsed = {}));
function respond(recipient, message) {
    //...
    console.log(recipient, message);
}
respond("Captain Pangyo", Responsed.Yes);
//================================= 문자형 이넘
(function (Direction) {
    Direction["UpDirection"] = "Up";
    Direction["DownDirection"] = "Down";
    Direction["LeftDirection"] = "Left";
    Direction["RightDirection"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.UpDirection);
//================================= 복합 이넘
//가능은 하나 권고하지 않음!
//런타임 시점에서의 이넘 특징
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function getX(obj) {
    return obj.X;
}
getX(E);
// 리버스 매핑
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let keyName = Enum[a];
