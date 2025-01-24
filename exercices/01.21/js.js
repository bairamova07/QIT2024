let timee;
let timess = 0;
let isTime = false;

const times = document.getElementById("time");
const buttons1 = document.getElementById("button1");
const buttons2 = document.getElementById("button2");

buttons1.addEventListener("click", () => {
  if (!isTime) {
    buttons1();
    buttons1.textContent = "Тоқтау";
  } else {
    stop - T();
    buttons1.textContent = "Жалғастыру";
  }
});

buttons2.addEventListener("click", resaltTimer);

