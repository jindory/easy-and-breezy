'user strict';

//Promise state : pending -> fulltilled(성공적으로 이행) or rejected(문제생기면 호출)
//Producer vs Consumer 

//1. Producer
//새로운 Promise가 만들어질때는 executor가 바로 실행 됨.
const promise = new Promise((resolve, reject) =>{
    // 무거운 작업을 하게 됨
    console.log('doing something...');


    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network')) //Error - 자바스크립트에서 제공
    }, 2000);
});

//만들어진 Promise를 이용하는 Consumers
promise
    .then((value)=>{ // resolve의 값이 value의 파라미터로 전달
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{ 
        console.log('finally');
    });


// Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout( ()=>resolve(1), 1000 )
})

fetchNumber
    .then(num=>num*2)
    .then(num=>num*3)
    .then(num=>{
        return new Promise((resolve, rejcet)=>{
            setTimeout(() => resolve(num-1), 1000);
        });
    })
    .then(num => console.log(num))