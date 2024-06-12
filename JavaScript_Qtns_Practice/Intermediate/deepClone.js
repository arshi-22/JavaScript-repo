function deepClone(originalObj) {
  if (originalObj !== null || typeof originalObj !== undefined) {
    const newObj = JSON.parse(JSON.stringify(originalObj));
    return newObj;
  }
}
sampleObj = {
  name: "Arshi",
  age: 25,
  greet: function () {
    console.log("Hi arshi");
  },
  sibling: {
    name: "Arunima",
    age: 27,
  },
};

const cloneObj = deepClone(sampleObj);

console.log(cloneObj === sampleObj);
console.log(cloneObj.sibling === sampleObj.sibling);

/*
This method might not work perfectly for objects with circular references (where objects reference each other) 
or for functions and other non-serializable data types.
It can be less performant compared to a custom deep copy function, especially for large objects.
*/
