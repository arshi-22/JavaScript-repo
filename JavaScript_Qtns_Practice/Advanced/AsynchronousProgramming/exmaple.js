// callback hell

displayMessage((joke) => {
  translateJoke(joke, (translatedJoke) => {
    postJoke(translatedJoke, () => {
      console.log(translatedJoke);
    });
  });
});

//using promise

displayMessage()
  .then((joke) => translateJoke(joke))
  .then((translatedJoke) => postMessage(translatedJoke))
  .then(() => console.log("joke posted"))
  .catch((error) => {
    console.log(error);
  });

// async and await

async function displayJoke(msg) {
  try {
    let joke = await displayMessage(msg);
    let translatedJoke = await translateJoke(joke);
    await postMessage(translatedJoke);
    return "Joke posted";
  } catch (error) {
    return error;
  }
}
