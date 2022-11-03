class Developer {
  readonly name: string;
  constructor(theName: string) {
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
