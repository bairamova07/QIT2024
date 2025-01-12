const nameField = document.getElementById("nameField");
const helperText = document.getElementById("helperText");

nameField.addEventListener("focus", () => {
  nameField.style.borderColor = "blue";
  helperText.textContent = "Атыңызды толық жазыңыз";
});

nameField.addEventListener("blur", () => {
  helperText.textContent = "";
});
