function getText(text: any) {
  return text;
}

//ㅎ-ㅎ
//테스트

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); //사용할 때 지정해줌

const arr2 = ["1", "2", "3"];
getSize<string>(arr2); //사용할 때 지정해줌

//interface
interface Mobile<T> {
  name: string;
  price: number;
  option: T; //오잉?
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

// <T extends {name: string}>
