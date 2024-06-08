import axios from "axios";

async function fetchData(URL) {
  try {
    let response = await axios.get(URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");
