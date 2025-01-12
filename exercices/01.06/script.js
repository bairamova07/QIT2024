const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const operators = ["+", "-", "*", "/", "%"];

let output = "";

function calculate(btnValue) {
  display.focus();
  if (btnValue == "=" && output != "") {
    output = eval(output);
  } else if (btnValue == "C") {
    output = "";
  } else if (btnValue == "+/-" && !isNaN(output.value)) {
    output = output * -1;
  } else if (btnValue == "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnValue == "+/-") {
      return;
    } else {
      output += btnValue;
    }
  }
  display.value = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
    calculate(e.target.dataset.value);
  });
});
