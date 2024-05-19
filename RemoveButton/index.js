let divElement = document.getElementById("parentDiv");
let innerElements = "";
for (let i = 0; i <= 5; i++) {
  innerElements += `
        <div id=${i}>
            <img src="" alt=${i}>
            <button class="remove" id=${i}+"remove" onclick="onClickHandler(id,${i})">Remove</button>
            <br/> <br/>
        </div>`;
}
divElement.innerHTML = innerElements;

const removeElement = (parentid) => {
  document.getElementById(parentid).remove();
};

const onClickHandler = (id, parentid) => {
  console.log("clicked");
  let buttonElement = document.getElementById(id);
  buttonElement.addEventListener("click", removeElement(parentid));
};

document.getElementById("1remove").click();

// onClickHandler("1remove", 1);

console.log(document.body.innerHTML);
