async function getData(URL) {
  try {
    let res = await fetch(URL);
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}

getData("https://fakestoreapi.com/products/1");
