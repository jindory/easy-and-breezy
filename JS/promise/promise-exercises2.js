'use strict';

/*메서드를 호출하면 대기(Pending) 상태*/
// new Promise(function(resolve, rejcet){
// });
new Promise((resolve, reject) => {
    //new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고,
    //콜백 함수의 인자는 resolve, rejcet
})


/*콜백 함수의 인자 resolve를 실행하면 이행(Fulfilled) 상태*/
new Promise((resolve, reject) => {
    resolve();
})
//그리고 이행 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있습니다.
// function getData(){
//     return new Promise((resolve, reject)=>{
//         var data = 100;
//         resolve(data);
//     });
// }
// resolveData 위에서 resolve(...) 호출에 제공한 값입니다.
// 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료'입니다.
// getData().then(function(resolveData){
//     console.log(resolveData);
// });


/*콜백 함수의 인자 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 됩니다 */
// new Promise((resolve, reject)=>{
//     reject();
// });


function getData(){
    return new Promise((resolve, reject)=>{
        reject(new Error('Request is failed'));
    });
}

getData().then().catch(function(err){
    console.log(err);
});