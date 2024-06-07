const queries = [
  ["ADD", "1"],
  ["ADD", "2"],
  ["ADD", "5"],
  ["ADD", "2"],
  ["EXISTS", "2"],
  ["EXISTS", "5"],
  ["EXISTS", "1"],
  ["EXISTS", "4"],
  ["EXISTS", "3"],
  ["EXISTS", "0"],
];

const container = new Set();
const result = [];

const findQuery = (query) => {
  for (const item of query) {
    if (item[0] === "ADD") {
      container.add(item[1]);
      result.push("");
    } else {
      result.push(container.has(item[1]) ? "true" : "false");
    }
  }
};

findQuery(queries);
console.log(result);
