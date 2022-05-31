let myFirstPromise = new Promise ((resolve, reject) =>{
// 이 예제에서는 setTimeout()을 사용해 비동기 코드를 흉내냅니다.
// 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
    setTimeout(function(){
        resolve('성공;')
    },2500)
});

myFirstPromise.then((success)=>{
// success는 위에서 resolve(...) 호출에 제공한 값입니다.
console.log('우왕'+success)
});