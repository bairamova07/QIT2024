const dropdown = document.getElementById("dropdown");
const selectedValue = document.getElementById("selectedValue");

dropdown.addEventListener("change", () => {
  // selectedValue.textContent = dropdown.value;

  if (dropdown.value !== "nothing") {
    selectedValue.textContent = dropdown.value;
  }
});
