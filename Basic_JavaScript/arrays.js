const numbers = [1, 2, 3, 4]; // can not reassign arr because it declared as constant, but we can modify the content of the array

//Array Methods
console.log(numbers); //[ 1, 2, 3, 4 ]
console.log(numbers.push(60)); // 5
console.log(numbers.pop()); // 60
console.log(numbers.length); // 4
console.log(numbers.toString()); // 1,2,3,4
console.log(numbers.join(" *")); //1 *2 *3 *4
console.log(numbers.at(2)); //3
console.log(numbers.shift()); //1
console.log(numbers); //[ 2, 3, 4 ]
console.log(numbers.unshift(5)); //3
console.log(numbers); //[ 5,2, 3, 4 ]
numbers[0] = 1;
console.log(numbers); //[ 1, 2, 3, 4 ]

const fruits = ["Apple", "Kiwi", "Banana", "Strawberry"];
console.log(numbers.concat(fruits)); //[ 1, 2, 3, 4, 'Apple', 'Kiwi', 'Banana', 'Strawberry' ]
console.log(numbers); //[1,2,3,4]
console.log(fruits); //["Apple", "Kiwi", "Banana", "Strawberry"]

console.log(fruits.copyWithin(2, 1)); //[ 'Apple', 'Kiwi', 'Kiwi', 'Banana' ];
fruits[2] = "Straberry";

const numbers2 = [
  [1, 2],
  [5, 6, 8],
];
console.log(numbers2.flat()); //[ 1, 2, 5, 6, 8 ]
console.log(numbers2);

/*                   Splice & Slice 
                     --------------
*/

const month = ["January", "Febuary", "March", "April", "May", "June"];
month.splice(0, 2);
console.log(month); //[ 'March', 'April', 'May', 'June' ]
month.splice(0, 0, "January", "Feb");
console.log(month); //[ 'January', 'Feb', 'March', 'April', 'May', 'June' ]
console.log(month.toSpliced(0, 1)); //[ 'Feb', 'March', 'April', 'May', 'June' ]
console.log(month); //[ 'January', 'Feb', 'March', 'April', 'May', 'June' ]

const colors = ["Black", "White", "Red", "Green", "Blue"];
console.log(colors.slice(0, 3)); //[ 'Black', 'White', 'Red' ]
console.log(colors); //[ 'Black', 'White', 'Red', 'Green', 'Blue' ]
console.log(colors.slice(1)); //[ 'White', 'Red', 'Green', 'Blue' ]

/* 
                Array Search 
                ------------
*/

const lang = ["English", "Malayalam", "French", "Chinese", "Japanese"];
console.log(lang.indexOf("English")); // 0;
console.log(lang.indexOf("abx")); //-1
console.log(lang.indexOf("French", 3)); //-1 -> from where to start the search (french is on 2nd position)
console.log(lang.lastIndexOf("Chinese")); //3 if there is 2 values the second one's index will return
console.log(lang.includes("Japanese")); //true

console.log(lang.find(findTheElement)); //Malayalam
console.log(lang.findIndex(findTheElement)); //1
function findTheElement(value, index, array) {
  return value === "Malayalam";
}
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high); //42

/*
                    Array Sort
                    ----------
*/
const temp2 = [27, 28, 30, 40, 42, 35, 30];
console.log(temp2.sort()); //[27, 28, 30, 30,35, 40, 42 ]
console.log(temp2); ////[27, 28, 30, 30,35, 40, 42 ]
console.log(temp2.reverse()); /* [ 42, 40, 35, 30,30, 28, 27] */
console.log(temp2.toSorted()); //Do not alter original array
console.log(temp2.toReversed());

// Numeric sort
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); //[ 1, 5, 10, 25, 40, 100 ]
points.sort((a, b) => b - a);
console.log(points); //[ 100, 40, 25, 10, 5, 1 ]
console.log(Math.min.apply(null, points)); //1

//Object array
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

console.log(cars.sort((a, b) => a.year - b.year));

console.log(
  cars.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  })
);
