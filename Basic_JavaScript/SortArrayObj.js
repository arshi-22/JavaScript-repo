function sortByAscendingOrder(jsonString) {
  let jsonObject = JSON.parse(jsonString);
  return JSON.stringify(
    jsonObject.sort((a, b) =>
      a.price - b.price ? 1 : a.name.localeCompare(b.name) ? -1 : 0
    )
  );
}

console.log(
  sortByAscendingOrder(
    '[{"name":"Z","price":90},{"name":"B","price":10},{"name":"A","price":10}]'
  )
);
