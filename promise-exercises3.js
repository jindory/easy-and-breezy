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