const clickButton = document.getElementById("clickButton");
const container = document.getElementById("container");

clickButton.addEventListener("click", () => {
  container.classList.toggle("dark");
});
