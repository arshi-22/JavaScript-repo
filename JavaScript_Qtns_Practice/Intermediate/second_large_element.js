const arr = [12, 1, 2, 4, 8, 92];
console.log(findSecondLargestElement(arr));

function findSecondLargestElement(arr) {
  let largest = -Infinity;
  let secondlarge = -Infinity;
  if (arr.length < 2) {
    return "There is no second largest element";
  }
  for (const ele of arr) {
    if (ele > largest) {
      secondlarge = largest;
      largest = ele;
    }
    if (ele > secondlarge && ele < largest) {
      secondlarge = ele;
    }
  }
  return "secondlargest element is - " + secondlarge;
}
