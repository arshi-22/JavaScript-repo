const my = {
  name: "Arshima",
  talk() {
    return `Hi I'm ${this.name}`;
  },
};

const aji = {
  name: "Ajith",
  talk() {
    return `Hi I'm ${this.name}`;
  },
};

function persionFactory(name) {
  return {
    talk() {
      return `Hi I'm ${this.name}`;
    },
  };
}

const me = persionFactory("Arshima");

function createElement(type, text, color) {
  const ele = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(ele);
  return {
    ele,
    setText(text) {
      el.innerText = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}

const h1 = createElement("h1", "Hey", "green");
