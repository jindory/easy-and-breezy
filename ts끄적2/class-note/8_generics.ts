// function logText(text) {
//     console.log(text);
//     return text;
// }

// function logText<T>(text:T):T{
//     console.log(text);
//     return text;
// }

// logText<string>('ㅎㅏ이'); //호출하는 시점에 타입을 정해준다?.?


// function logText(text:string){
//     console.log(text);
//     return text;
// }

// function logNumber(num:number){
//     console.log(num);
//     return num;
// }

function logText<T>(text:T):T{
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split //문자열 'ㅅ'!!

const login = logText<boolean>(true);




// 제네릭의 타입 제한
function logTextLength<T>(text:T[]):T[]{
    text.forEach(function(text){
        console.log(text);
    });
    console.log(text.length);
    return text
}
logTextLength<string>(['hi']);



// 제네릭의 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number; 
}
function logTextLengthh<T extends LengthType>(text:T):T{
    text.length;
    return text
}

// logTextLengthh(10); 
// logTextLength({length:10})



// 제네릭의 타입 제한3 - keyof ~~~~'ㅅ'
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{ //키들중에 한가지가 T이 된다.
    return itemOption
}

getShoppingItemOption('price');