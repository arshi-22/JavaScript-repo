const words = ["eat", "ate", "tea", "tan"];

const findAnagrams = (strs) => {
  const anagrams = {};
  for (const str of strs) {
    const sortredStr = str.split("").sort().join("");
    if (anagrams[sortredStr]) {
      anagrams[sortredStr].push(str);
    } else {
      anagrams[sortredStr] = [str];
    }
  }
  console.log(Object.values(anagrams));
};

findAnagrams(words); //[ [ 'eat', 'ate', 'tea' ], [ 'tan' ] ]

