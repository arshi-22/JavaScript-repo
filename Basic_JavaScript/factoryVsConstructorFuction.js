function createPerson(name) {
  return {
    name,
    talk() {
      return `Hi ${name}`;
    },
  };
}

const me = createPerson("Arshi");
