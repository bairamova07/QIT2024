const citySelect = document.getElementById("citySelect");
const regionSelect = document.getElementById("regionSelect");

const regions = {
  almaty: ["Алмалы", "Бостандық", "Жетісу", "Медеу"],
  astana: ["Есіл", "Сарыарқа", "Байқоңыр", "Алматы ауданы"],
  shymkent: ["Абай", "Әл-Фараби", "Еңбекші", "Қаратау"],
};

citySelect.addEventListener("change", function () {
  let selectedValue = citySelect.value;

  regionSelect.innerHTML =
    '<option value=""disabled selected>Ауданды таңдаңыз</option>';

  if (regions[selectedValue]) {
    regions[selectedValue].forEeach(function (region) {
      const option = document.createElement("option");
      option.value = region.toLowerCase();
      option.textContent = region;
      regionSelect.appendChild(option);
    });

    regionSelect.disabled = false;
  } else {
    regionSelect.disabled = true;
  }
});
