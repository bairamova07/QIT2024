let num = 1;
while (num <= 15) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}

let number = 1;
let factorial = 0;

while (number <= 10) {
  factorial += number;
  number++;
}

console.log(number);

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
