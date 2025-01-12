// const myButton = document.getElementById("MyButton");

// myButton.addEventListener("click", () => {
//   myButton.classList.add("highlight");
// });

// myButton.addEventListener("dblclick", () => {
//   myButton.classList.add("highlight-orange");
// });

//classList.add("header")класс қосу
//classList.remove()класс қосу

const myButton = document.getElementById("myButton");
const searchInput = document.getElementById("searchInput");

myButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
});
