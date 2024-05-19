function foo1() {
  return {
    boo: "Hi",
  };
}

function foo2() {
  return;
  {
    boo: "Hi";
  }
}

console.log(foo1());
console.log(foo2()); //error
