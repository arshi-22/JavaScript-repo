function deepClone(obj) {
  if (obj === null || typeof obj === undefined) {
    return obj;
  }
  if (obj instanceof Array) {
    return obj.map((element) => deepClone(element));
  } else if (obj instanceof Object) {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = deepClone(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
}

const originalObj = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const clonedObj = deepClone(originalObj);
console.log(clonedObj);
console.log(originalObj === clonedObj); // false (different objects)
console.log(originalObj.address === clonedObj.address); // false (deep copied addresses)
