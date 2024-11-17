//-ші тапсырма

var num1 = +prompt("екі сан енгізіңіз");
var num2 = +prompt("");
var result4 = 1;
var result7 = 1;
var maxNum;
var minNum;

if (num1 > num2) {
  maxNum = num1;
  minNum = num2;
} else {
  maxNum = num2;
  minNum = num1;
}

while (minNum <= maxNum) {
  if (minNum % 4 == 0) {
    result4 *= minNum;
  } else if (minNum % 7 == 0) {
    result7 *= minNum;
  }
  minNum++;
}

console.log("4-ke bolinetin kobeitindisi" + result4);
console.log("7-ge bolinetin kobeitindisi" + result7);
