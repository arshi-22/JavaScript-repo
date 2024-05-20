function findSum(arr, minOrMaxValue) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== minOrMaxValue) {
      sum += arr[i];
    }
  }
  return sum;
}

function findSumOfElements(arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

function miniMaxSum(arr) {
  let minValue = Math.min.apply(null, arr);
  let maxValue = Math.max.apply(null, arr);
  if (minValue === maxValue) {
    let minSum = findSumOfElements(arr);
    let maxSum = findSumOfElements(arr);
    console.log(minSum, maxSum);
  } else {
    let minSum = findSum(arr, maxValue);
    let maxSum = findSum(arr, minValue);
    console.log(minSum, maxSum);
  }
}

let numbers = [5, 5, 5, 5, 5];
// min - 1+2+3+4 =10
//max - 2+3+4+5 = 14
miniMaxSum(numbers);
