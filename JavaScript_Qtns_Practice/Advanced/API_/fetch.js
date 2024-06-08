async function getData(URL) {
  try {
    let res = await fetch(URL);
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}

getData("https://jsonplaceholder.typicode.com/todos/1");
