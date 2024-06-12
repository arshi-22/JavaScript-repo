function deBounce(fun, dely = 500) {
  let timeOut;
  clearTimeout(timeOut);
  timeOut = setTimeout(fun, dely);
}

function fetchData() {
  console.log("the data fetched");
}

deBounce(fetchData, 1000);
