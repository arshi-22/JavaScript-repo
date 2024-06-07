function findAbsoluteDiagonalDifference(arr) {
  let arrayLength = arr.length;
  let diagonal1Sum = 0;
  let diagonal2Sum = 0;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if (i === j) {
        diagonal1Sum += arr[i][j];
      }
      if (i + j === arrayLength - 1) {
        diagonal2Sum += arr[i][j];
      }
    }
  }
  return Math.abs(diagonal1Sum - diagonal2Sum);
}

const matrix = [
  [10, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findAbsoluteDiagonalDifference(matrix));
