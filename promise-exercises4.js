'use strict';

//프로미스의 에러 처리 방법
// 1.then()의 두 번째 인자로 에러를 처리하는 방법
getData().then(success, error);

// 2.catch()를 이용하는 방법
getData().then().catch();


//위의 2가지 방법 모두 프로미스의 reject() 메서드가 호출되어 실패가 된 경우에 실행된다.
function getData(){
    return new Promise((reslove, reject){
        reject('failed');
    });
}

//1.then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(function(){
    //...
},function(err){
    console.log(err)
})

//2.catch()로 에러를 처리하는 코드
getData().then().catch(function(err){
    console.log(err);
})



/* 에러 처리는 가급적 catch()를 사용하잣 */

new Promise((resolve, reject) => {
throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
    
new Promise((resolve, reject) => {
reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
//위 두 코드는 동일하게 작동하지만.. .catch은 명시적 거부를 포착할 뿐만 아니라 위의 처리기에서 우발적인 오류도 포착 (?)
//뭔소린디.. 


function getData(){
    return new Promise((resolve, reject){
        resolve('hi');
    });
}

getData()
    .then(function(result){
        console.log(result); // hi
    })
    .catch(function(err){
        console.log('then error :', err);
    });


