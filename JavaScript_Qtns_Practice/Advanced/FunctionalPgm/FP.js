//Using map instead of a for loop to transform an array:
const numbers = [2, 3, 4, 45, 656, 67];
numbers.map((number) => console.log(number * 2));

function area(height, width) {
  return height + width;
}
console.log(area(5, 10)); //pure function
