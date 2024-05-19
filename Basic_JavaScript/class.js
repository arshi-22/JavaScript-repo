class Person {
  greet() {}
}

let personObj = new Person();
console.log(typeof Person);

employee(); // no error
function employee() {}
employee();

// class is hoisted

let p = new Person();
console.log(p.greet === Person.prototype.greet); //true
