const paliandromeIndex = (str) => {
  const reverString = (string) => string.split("").reverse().join("");
  if (reverString === str) {
    return -1;
  } else {
    for (let i = 0; i < str.length; i++) {
      let splicedStr = str.substring(0, i) + str.substring(i + 1);
      if (splicedStr === reverString(splicedStr)) {
        return i;
      }
    }
  }
};

console.log(paliandromeIndex("aaaa"));
