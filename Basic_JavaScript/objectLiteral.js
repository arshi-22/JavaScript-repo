const person ={
    firstname : "Arshima",  // object literals.
    lastname : "Sagunan"
}
console.log(person.firstname,person.lastname);


//second way-------

let firstname = "Arshima";
let lastname = "Sagunan";

const person1 ={
    firstname,
    lastname 
};
console.log(person.firstname,person.lastname);

// third way
let ln = "last name";
let person2 = {
    "first name" :"Chandler",
    [ln] : "Bing"
};
console.log(person2["first name"]);
console.log(person2);