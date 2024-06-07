function createRobot(name) {
  return {
    name: name,
    talk: function () {
      console.log("My name is " + name);
    },
  };
}

const chitti = createRobot("chitti");
console.log(chitti.talk());
