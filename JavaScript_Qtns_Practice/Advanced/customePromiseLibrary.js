function promiseSample(executor) {
  let state = "Pending";
  let value;
  let reason;

  const resolve = (val) => {
    if (!state !== "Pending") return;
    state = "Fulfilled";
    value = val;
  };

  const rejected = (error) => {
    if (!state !== "Pending") return;
    state = "Rejected";
    reason = error;
  };

  try {
    new Promise((resolve, rejected) => executor(resolve, rejected));
  } catch (error) {
    return error;
  }

  if (state === "Fulfilled") {
    return state;
  } else if (state === "Rejected") {
    return reason;
  }
}

async function fetchData() {
  try {
    const result = await promiseSample((resolve, rejected) => {
      setTimeout(() => {
        console.log("Resolved and this function completed");
      }, 1000);
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
