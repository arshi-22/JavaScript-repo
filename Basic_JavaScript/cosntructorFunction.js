function Person(name) {
  this.name = name;
  this.talk = () => {
    return `Hello ${name}`;
  };
}

const sina = new Person("Sina");

function SuperElement(type, content) {
  this.element = document.createElement(type);
  this.element.innerText = content;
  document.body.append(this.element);
  this.element.addEventListener("click", () => {
    console.log(this.element);
  });
}

const h1 = new SuperElement("h1", "Hi ");
