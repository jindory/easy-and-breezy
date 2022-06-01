'use strict';

//자바스크립트는 동기적인 i
//호이스팅 : var, function declaration 선언들이 자동적으로 가장 위로 올라가는 것
console.log('1');
setTimeout(() => console.log('2'), 1000); //1초가 지난후에 call해조!!!!!!!!!!ㅎ-ㅎ
console.log('3');

//synchronous callback!
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

//Asynchronous callback!
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);



//Callboack Hell example
class UserStorage {
   loginUser(id, password, onSuccess, onError){ //챱,챱,콜백,콜백
      setTimeout(()=>{
         if((id==='ellie' && password==='dream')||(id==='coder' && password==='academy')){
         onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
      }, 2000)
   }
   getRoles(user, onSuccess, onError){
      setTimeout(()=>{
         if(user==='ellie'){
            onSuccess({name: 'ellie', role: 'admin'});
         } else {
            onError(new Error('no access'));
         }
      }, 1000);
   }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt ('enter your password');

userStorage.loginUser(
   id, 
   password,
   (user)=>{
      userStorage.getRoles(
         user,
         (userWithRole)=>{
            alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`);
         }, 
         (error) =>{
            console.log(error);
         }
      );
   }, 
   (error)=>{
      console.log('error')
})

//거북쓰;;;;;;;🐢  