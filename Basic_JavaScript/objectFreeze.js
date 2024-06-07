const person = Object.freeze({
  name: "Arshima",
  address: {
    city: "Kannur",
  },
});

console.log(person);
person.age = 24;
console.log(person);
person.address.country = "India";
console.log(person);

const human = {
  name: "Arshima",
  address: {
    city: "Kannur",
  },
};

human.age = 28;
console.log(human);
