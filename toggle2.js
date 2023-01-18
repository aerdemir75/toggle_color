const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

window.addEventListener("load", buildMenu);
document.getElementById("solidbar").addEventListener("click", handleListItems);

function buildMenu() {
  let ulElement = document.getElementById("button-group");
  ulElement.style.display = "none";
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let listItem = document.createElement("li");
    listItem.value = color;
    listItem.innerText = color;
    listItem.style.backgroundColor = color;
    listItem.addEventListener("click", () => {
      changeBackgroundColor(color);
      ulItem.style.display = "none";
    });
    ulElement.appendChild(listItem);
  }
}

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  function handleListItems() {
    let ulElement = document.getElementById("button-group");
    if (ulElement.style.display === "none") {
      ulElement.style.display = "block";
    } else {
      ulElement.style.display = "none";
    }
  }
