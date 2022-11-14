// ES6 부터 사용된~ 클래스 'ㅅ'

class Person {
    //인스턴트를 만들어주는 클래스
    //클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30);  //생성 되었습니다
console.log(seho);
