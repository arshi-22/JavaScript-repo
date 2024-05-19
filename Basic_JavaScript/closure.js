const add = (function () {
  let count = 0;
  function incrementCounter() {
    console.log(count);
    return (count += 1);
  }
  return incrementCounter();
})();

add();
add();
add();
