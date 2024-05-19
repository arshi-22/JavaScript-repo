const He = {
  talk() {
    return "Talking";
  },
};

He.talk();

const She = {
  talk() {
    return "Talking";
  },
};

She.talk();

//here we are repeating the same logic for 2funs and
//it's code duplication and if the function is wrong and we update it the same we need to do in all function where ever the same fun used.
//So here the inheritance come into the picture,

class Person {
  talk() {
    return "Talking";
  }
}

class Human extends Person {
  fly() {
    return "Flying";
  }
}

const me = new Human(); //instance
const you = new Person();

me.fly();
me.talk();
you.talk();
you.fly(); /// fly is not available for you
