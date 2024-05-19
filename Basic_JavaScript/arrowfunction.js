const example = () => 25;
console.log(example); //arrow function with out parameter

const example2 = number => number*number;
console.log(25); // arrow function with one parameter

const example3 = (number1,number2) => number1 *number2; //arrow function with 2 parameter

const example4 = [
    {id :1 , name :'Arsi'},{id:2, name:'Arshima'}
]

const val = example4.filter(name => name.id);