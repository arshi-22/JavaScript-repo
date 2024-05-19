
function sayHello() {
    for(var i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log(i); // will print i value 5, because it's defined as var and can access within function
}
sayHello();


function sayHi() {
    for(let i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log(i) // will raise error because i defined as let access only within block only
}
sayHi();


const x =1;
x = 2 // will show error, because constant can not be change, access within block only.

// let used to reassign the value to a variable. That's the difference
 console.log(typeof x) // will print type of x
 /*
 multi line comments
 */