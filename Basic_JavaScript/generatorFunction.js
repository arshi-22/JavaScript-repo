function* createNumbers() {
  const person = {
    name: "Arshi",
  };
  yield person;
  yield 30;
  yield 50;
}
let gen = createNumbers();
console.log(gen.next());
console.log(gen.next());
