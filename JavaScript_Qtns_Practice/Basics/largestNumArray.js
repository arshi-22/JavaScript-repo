function largestElement(numbers) {
  let largest = numbers[0];
  for (let number of numbers) {
    if (largest < number) {
      largest = number;
    }
  }
  return largest;
}

console.log(largestElement([2, 5, 65, 8, 5, 1, 22332]));
