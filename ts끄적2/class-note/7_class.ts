//문법 차이
class Person2 {
    private name: string; //범위 지정
    public age: number;
    readonly log: string; //읽기 전용쓰
     
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}
