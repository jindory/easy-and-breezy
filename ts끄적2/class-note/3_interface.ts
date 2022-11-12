interface User {
    age:number;
    name:string;
}

// 변수에 인터페이스 활용
var seho : User = {
    age: 33,
    name:'세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용 -ㅅ-;;;?....
interface SumFucntion {
    (a:number, b:number): number
}

var sum : SumFucntion;
sum = function(a:number, b:number):number{
    return a+b
}




//인덱싱 ㄷ-ㄷ;
interface StringArray {
    [index: number]: string;
}

var arr2: StringArray = ['a','b','c'];
// arr2[0] = '10'




//딕셔너리 패턴
interface StringRegexDictionary{
    [key:string]: RegExp;
}

var obj2: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFIle:/\.js%/,
}



//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var capt2 : Developer = {
    language: 'hi',
    name:'hi',
    age: 12
}
