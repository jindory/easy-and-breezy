'use strict';

//promise is a JavaScript object for asynchronous operation.

//state : pending -> fulfilled or rejected 
//만드는사람 , 소비하는사람

//1.만드는 사람
//새로운 프로미스가 만들어질때는 콜백함수가 자동적으로 바로 실행된다.
const promise = new Promise((resolve, reject)=>{
    //무거운 작업들을 진행하게 될 것 (network, read files)
    console.log('냥냥냥냥...');
    setTimeout(()=>{
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
})

//2.이용하는 사람: then, catch, finally
promise
.then((value)=>{ //정상적으로 잘 수행이 되어서 then의 인자에 전달되어 들어옴
    console.log(value);
})
.catch((error)=>{
    console.log(error)
})


//3. promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 1000);
})


fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(num - 1),1000);
    });
})
.then(num => console.log(num));




//4. Error Handling
const getHen = () => 
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${egg} => 🍳`), 1000);
    })

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return '☕️';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);



// 