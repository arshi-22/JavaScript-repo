function add(a, b) {
  return a + b;
}

function findNumber(callback, x) {
  let n = 10;
  return callback(n, x);
}

console.log(findNumber(add, 5));

function sayHi() {
  console.log("Hi");
}
function sayGreeting() {
  console.log("Good morning");
}
setTimeout(sayGreeting, 1000);
sayHi();


