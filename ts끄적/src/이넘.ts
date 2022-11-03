//이넘은 특정 값들의 집합을 의미하는 자료형

//================================= 숫자형 이넘
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//숫자형 이넘 사용하기
enum Responsed {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Responsed): void {
  //...
  console.log(recipient, message);
}

respond("Captain Pangyo", Responsed.Yes);

//================================= 문자형 이넘
enum Direction {
  UpDirection = "Up",
  DownDirection = "Down",
  LeftDirection = "Left",
  RightDirection = "Right",
}
console.log(Direction.UpDirection);

//================================= 복합 이넘
//가능은 하나 권고하지 않음!

//런타임 시점에서의 이넘 특징
enum E {
  X,
  Y,
  Z,
}

function getX(obj: { X: number }) {
  return obj.X;
}

getX(E);

// 리버스 매핑
enum Enum {
  A,
}
let a = Enum.A;
let keyName = Enum[a];
