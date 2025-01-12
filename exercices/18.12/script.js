// const parent = document.getElementById("parent");

// const newDiv = document.createElement("div");
// newDiv.textContent = "Жаңа контейнер";
// newDiv.style.background = "green";

// parent.appendChild(newDiv);

const basket = document.getElementById("basket");
const deleteButton = document.getElementById("delete");
const replaceButton = document.getElementById("replace");
const item1 = document.getElementById("item1");

deleteButton.addEventListener("click", () => {
  basket.removeChild(item1);
});

const newItem = document.createElement("div");
newItem.innerHTML =
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rgrdcWxhRbtJErWxgm_oO7VJ2XuCvbqkfw&s' 'width=100px' 'height=100px' >";

replaceButton.addEventListener("click", () => {
  basket.replaceChild(newItem, item1);
});

const parent = document.getElementById("container");
const child = document.getElementById("second");

const button = document.getElementById("removeButton");
button.addEventListener("click", () => {
  parent.removeChild(child);
  alert("Екінші параграфты жойылды!");
});
