//this contains  the reference of current object

const person = {
    name : 'Arshi',
    walk(){
        console.log(this);
    }
 }

 person.walk();
 //const walk = person.walk(); 
 //walk(); // return undefined
 const walk = person.walk.bind(person);
 walk(); // return object 