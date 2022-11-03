// 인터페이스란 상호 간에 약속 혹은 규칙!

// let person = { name: "Capt", age: 30 };

// function logAge(obj: { age: number }) {
//   console.log(obj.age);
// }

// logAge(person); 아항.. 여기서 객체를 넣어줘서 가능한거였슴 'ㅅ'

interface personAge {
  //인터페이스 이름
  age: number; //속성:타입, 속성?:타입
}

function logAge(obj: personAge) {
  console.log(obj.age);
}

let person = { name: "Capt", age: 30 };
// logAge(person);

interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
  //console.log(beer.name, beer.hop);
}

brewBeer(myBeer);

//읽기 전용 속성
interface CraftBeerRead {
  //객체를 선언'ㅅ'!
  readonly brand: string; // readonly를 넣었기 땜무네..
}

let myBeerList: CraftBeerRead = {
  brand: "Belgian Monk",
};
// myBeerList.brand = 'Korean Carpenter'; //에러가 난다.

//읽기 전용 배열
let arrRead: ReadonlyArray<number> = [1, 2, 3];
// arrRead.splice(0,1); //error
// arrRead.push(4); //error
// arrRead[0] = 100; //error

//인터페이스를 이용하면 객체를 선언할 때 좀 더 엄밀한 속성 검사 가능

//함수 타입
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인 했습니다");
  return true;
};
console.log(loginUser("abc", "abc"));

//클래스 타입 - 타입스크립트에서도 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있음
// 🔴
interface CraftBeerClass {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeerClass implements CraftBeerClass {
  beerName: string = "Baby Guinness";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}

//인터페이스 확장
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
fe.namee = "josh";
fe.skill = "TypeScript";

console.log(fe.name, fe.skill);

// ------------------ 여러개 확장하기 ------------------
interface Person {
  namee: string;
}

interface Person {
  drink: string;
}

interface Developer extends Person {
  skill: string;
}

let feList = {} as Developer;
feList.namee = "josh";
feList.skill = "Ts";
feList.drink = "Beer";
console.log(feList.namee, feList.skill, feList.drink);
