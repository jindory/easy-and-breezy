"use strict";
class Developer {
    constructor(theName) {
        this.name = theName;
    }
}
let john = new Developer("John");
console.log(john.name);
// Accessor
// class DeveloperAcc{
//     named: string;
// }
// const josh = new DeveloperAcc();
// josh.named = 'Josh Bolton';
