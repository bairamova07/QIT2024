let apple = 1;
let resultEven = 0;
let resultOdd = 0;

while (apple <= 30) {
  if (apple % 2 == 0) {
    resultEven += apple;
  } else {
    resultOdd += apple;
  }

  apple++;
}

console.log(resultEven + "Bul san jup");
console.log(resultOdd + "Bul san taq");

let num1 = 0;

while (num1 <= 10) {
  if (num1 % 2 == 0) {
    break;
  }

  console.log(num1);
}

let num2;

do {
  num2 = prompt("On san jaz");

  if (num2 > 0) {
    break;
  }
} while (num2 < 0);
alert("Aiaqtaldu!");
