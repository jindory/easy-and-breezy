// enum Shoes {
//     Nike = 10, // 기본은 0
//     Adidas // 1씩 증가
// }

enum Shoes {
    Nike = '나이키', // 기본은 0
    Adidas = '아디다스' // 1씩 증가
}

var myShoes = Shoes.Nike;
console.log(myShoes); //0


//예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다');
    }

    if(answer == Answer.No){
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Y'); 이넘에서 제공되는 값만 넘길 수 있음!