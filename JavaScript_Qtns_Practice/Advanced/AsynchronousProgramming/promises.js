const fetchData = (URL) => {
  let promise = new Promise((resolve, reject) => {
    let xmlReq = new XMLHttpReques();
    xmlReq.open("GET", URL);
    xmlReq.onload = function () {
      if (xmlReq.status === 200) {
        resolve(xmlReq.response);
      } else {
        reject("Error while fetching data, Try again later");
      }
    };
    xmlReq.send();
  });
  return promise;
};


const displayData = (URL) => {
  fetchData(URL)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};

displayData("https://pokeapi.co/api/v2/pokemon?limit=50");

// Promise.all()
const promise1 = new Promise((resolve, reject) => {
  resolve("promise1 Resolved");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("promise2 Resolved");
});
const promise3 = new Promise((resolve, reject) => {
  // resolve("promise3 Resolved");
  reject("promise3 Rejected");
});

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
//promise3 Rejected

Promise.any([promise1, promise2, promise3])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
//promise1 Resolved

Promise.race([promise1, promise2, promise3])
  .then((res) => console.log("Race - ", res))
  .catch((error) => console.log("Race - ", error));
//Race -  promise1 Resolved

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
/* [
  { status: 'fulfilled', value: 'promise1 Resolved' },
  { status: 'fulfilled', value: 'promise2 Resolved' },
  { status: 'rejected', reason: 'promise3 Rejected' }
]*/

const promiseExmp = (URL) => {
  fetch(URL)
    .then((response) => console.log(response))

    .catch((error) => console.log(error));
};

promiseExmp("https://api.example.com/data");
