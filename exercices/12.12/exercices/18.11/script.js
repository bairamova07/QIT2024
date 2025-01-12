function sayHello() {
  console.log("hello");
}

sayHello();

function writeName() {
  let name = prompt("Oz atyndy engiz:");
  myName(name);
}

function myName(name) {
  console.log("Hello," + name);
}

//writeName();

function qosu(a, b) {
  return a + b;
}
console.log(qosu(7, 3));
console.log(qosu(4, 6));
console.log(qosu(7, 23));

const qosu1 = function qosu(a, b) {
  return a + b;
};
console.log(qosu1(7, 3));
console.log(qosu1(4, 6));
console.log(qosu1(7, 23));

function qosu(a, b) {
  return a + b;
}

function welcome(text) {
  return text + "\n" + Date();
}
console.log(welcome("Welcome to my code!"));

let name1 = prompt("Write your name");
let age = +prompt("Write your age");

function sayHello1(name, age) {
  return "Hello," + name + "\n" + "Your age is" + age;
}
console.log(sayHello1(name1, age));

let num1 = +prompt("");
let num2 = +prompt("");
let num3 = +prompt("");

function calc(a, b, c) {
  return a * b * c;
}
console.log(calc(num1, num2, num3));

let numbers = [2, , 4, 6, 7];

function arrayCalc(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  return result;
}

let numbers3 = [5, 8, 9, 7, 43, 23, 2];
console.log(arrayCalc(numbers));
console.log(arrayCalc(numbers3));
