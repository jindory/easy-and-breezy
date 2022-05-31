'use strict';

//ajax 통신 예제
//ajax통신이 뭘까?ㅎ-ㅎ 모르겠디만 서버에서 응답을 받아오는 것 같다.?

function getData(){
    //promise를 반환한다.
    return new Promise((reslove, reject)=>{
        $.get('url주소/product/1', (response) => {
            if(response){
                reslove(response);
            }
            reject(new Error('Request is failed'));
        });
    });
}


getData().then(function(data){
    console.log(data); // $get-if(response) : response값 출력
}).catch(function(err){
    console.err(err); //Error 출력
})



//여러개의 프로미스 연결하기
function getData(){
    return new Promise({
       
    });
}

getData()
    .then(function(data){
        //...
    })
    .then(function(){
        //...
    })
    .then(function(){
        //...
    });


//여러개의 프로미스 연결하기 예제
//프로미스 객체를 하나 생성하고 setTimeout()을 이용해 2초 후에 resolve()를 호출하는 예제
new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve(1)
        //resolve가 호출되면 프로미스가 대기 상태에서 이행 상태로 넘어가기 땜문에 .then()의 로직으로 넘어갑니다.
    }, 2000);
})
.then(function(result){
    console.log(result); //1
    return result+10;
})
.then(function(result){ 
    console.log(result); //11
    return result+20;
})
.then(function(result){ 
    console.log(result); //31
});


//실무에서 있을 법한 연결 사례
getData(userInfo)
    .then(parseValue)
    .then(auth)
    .then(diapaly);
//userInfo는 사용자 정보가 담긴 객체를 의미하고,
//parseValue, auth, display는 각각 프로미스를 반환해주는 함수라고 가정

var userInfo ={
    id:'test@abc.com',
    pw:'****'
}

function parseValue(){
    return new Promise({
        //...
    })
}
function auth(){
    return new Promise({
        //...
    })
}
function diapaly(){
    return new Promise({
        //...
    })
}