function handleOnSubmit(event) {
  let flag = true;
  let errorMessageElement = document.getElementsByClassName("error-message")[0];
  let errorMessage = "";
  if (
    document.getElementById("donate").checked &&
    !document.getElementById("delighted").checked
  ) {
    if (
      document.getElementById("not-delighted").checked &&
      !document.getElementById("reason").value.length > 0
    ) {
      flag = false;
      errorMessageElement.innerHTML = `<p> BOTH RULES BROKEN </p>`;
    } else {
      flag = false;
      errorMessageElement.innerHTML = `<p> RULE 1 BROKEN </p>`;
    }
  } else if (
    document.getElementById("not-delighted").checked &&
    !document.getElementById("reason").value.length > 0
  ) {
    flag = false;
    errorMessageElement.innerHTML = `<p> RULE 2 BROKEN </p>`;
  }
  event.preventDefault();
  return flag;
}
