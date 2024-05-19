// object in java script are collection of key value pairs.

const person =  {
    name : 'Arshima',
    walk() {}, //method
    talk(){}
};

person.talk(); // calling method talk
person.name = '';
person['name'] = 'A'; // reassign value to name
const targetValue = 'name';
person[targetValue.value] = 'John'; // dynamically reassign value

