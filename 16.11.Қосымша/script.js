//let num = 1;
//while (num <= 50) {
//console.log(num);
// num++;
//}

let sum = 0;
for (let g = 1; g <= 50; g++) {
  sum = sum + g;
}
console.log("50 - ge deyingy sandardyn qosyndysy" + sum);

//i++-->i = i + 1;
//t = 1;
//t = 1 + 1;
//t = 2;
//t = 2 + 1;
//t = 3;

//sum += sum + t
//1 - ші цикл
//t = 1; sum = 0 ; sum = 0 + 1; sum = 1;

//2 - ші цикл
//t = 2;sum = 1;sum = 1 + 2;sum = 3

//t = 3; sum = 3;sum = 3+3;sum = 6;
//t = 4;sum = 6;sum = 6 + 4;sum = 10;

let = result = 0;
let num = 1;
while (num <= 50) {
  result += num;
  num++;
}
console.log(result);

//1 <= 50;
//result += num ---> result + num
//0 = 0 + 1; result = 1;
//num = 2;

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let num1 = 1;
while (num1 <= 50) {
  if (num1 % 5) {
    console.log(num1);
  }
  num1++;
}

let num2 = 1;
while (num2 <= 50) {
  if (num2 * 5) {
    console.log(num2);
  }
  num2++;
}

for (let i = 1; i <= 10; i++) {
  console.log(5 + "x" + i + "=" + 5 * i);
}

let num3 = prompt("Enter number:");

for (let i = 1; i <= 10; i++) {
  console.log(num3 + "x" + i + "=" + num3 * i);
}
