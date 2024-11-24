let num1 = +prompt("Бірінші сан енгізініз");
let num2 = +prompt("Екінші сан енгізініз");
let num3 = prompt("Таңба енгізініз");

const calculator = (a, b, sign) => {
  if (sign == "+") {
    return a + b;
  } else if (sign == "-") {
    return a - b;
  } else if (sign == "*") {
    return a * b;
  } else if (sign == "/") {
    return a / b;
  }
};
