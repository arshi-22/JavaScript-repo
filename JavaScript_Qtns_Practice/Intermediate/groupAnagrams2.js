const findAnagram = (strs) => {
  const anagram = {};
  for (const str of strs) {
    const characterCount = {};
    for (const char of str) {
      const charCode = char.charCodeAt(0);
      characterCount[charCode] = (characterCount[charCode] || 0) + 1;
    }
    const key = Object.keys(characterCount).sort().join("");

    if (anagram[key]) {
      anagram[key].push(str);
    } else {
      anagram[key] = [str];
    }
  }

  return Object.values(anagram);
};

console.log(findAnagram(["eat", "ate", "tea", "tan"]));
