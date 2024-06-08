//without using predefined method
const reverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

console.log(reverseString("hello"));

/*
Easy method
*/

function reversString(str) {
  return str.split("").reverse().join("");
}

console.log(reversString("Arshu"));
