var Person = {
  firstName: "Arsima",
  lastName: "Sagunan",
  sayHello: function (greeting) {
    console.log(
      "Hello " + this.firstName + " " + this.lastName + " " + greeting
    );
  },
};

//different ways to call method inside the object
Person.sayHello("Good Morning");
Person.sayHello.call(Person, "Good Bye");
//Person.sayHello.call(sayHello, "Bye"); // wrong way of calling
// Person.sayHello.apply(Person, "See you");//wrong way of calling
Person.sayHello.bind(Person)("Good Aftenoon");
