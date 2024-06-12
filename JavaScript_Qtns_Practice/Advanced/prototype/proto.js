const Parent = {
  name: "parent",
  greet: function () {
    console.log("Hi good morning", this.name);
  },
};

let child = { __proto__: Parent };
//inherit parent property
// child.__proto__ = Parent;
child.greet(); // Hi good morning parent
console.log(child); //{}
child.name = "child";
child.greet(); //child.greet();
console.log(child); //{ name: 'child' }
