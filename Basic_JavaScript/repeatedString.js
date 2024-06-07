function findLetterCount(str, letter) {
  let count = 0;
  let strLength = str.length;
  for (let i = 0; i <= strLength; i++) {
    str[i] === letter && count++;
  }
  return count;
}

function repeatedString(s, n) {
  let strLength = s.length;
  let countInOriginal = findLetterCount(s, "a");
  console.log("countInOriginal", countInOriginal);
  let repeated = Math.floor(n / strLength);
  console.log("repeated", repeated);
  let remainingChars = n % strLength;
  console.log("remainingChars", remainingChars);
  let remianingRepeatedCharCount = findLetterCount(
    s.substring(0, remainingChars),
    "a"
  );
  let toatalCount = countInOriginal * repeated + remianingRepeatedCharCount;
  console.log("remainingCharslen", remianingRepeatedCharCount);
  return toatalCount;
}

console.log(repeatedString("aba", 10));
