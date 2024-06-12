const duplicateArray = [10, 45, 40, 10, "A", 45, "B", "A"];

function removeDuplicates(duplicateArray) {
  return duplicateArray.filter(
    (element, index) => duplicateArray.indexOf(element) === index
  );
}

console.log(removeDuplicates(duplicateArray));

//with out filter

function removeDuplicateElemenets(arr) {
  let values = {};
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!values.hasOwnProperty(arr[i])) {
      values[arr[i]] = true;
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicateElemenets(duplicateArray));
