let num = 10;

while (num % 3 == 0 && num % 5 == 0) {
  if (num % 2 === 0) {
    continue;
  }
  console.log("FizzBuzz");
}

let question;
let score = 5;

do {
  let question = +prompt("Қазақсан қай жылы тәуелсіздік алды?");
  if (question != 1991) {
    score--;
  } else {
    break;
  }
} while (true);

alert(score);

do {
  let question = +prompt("Қазақ хандығы қай жылы құрылды?");
  if (question != 1465) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);

do {
  let question = +prompt("Қазақстанның ұлттық валютасы қай жылы енгізілді?");
  if (question != 1993) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);

do {
  let question = +prompt("Теңгенің алғашқы жаңа дизайны қай жылы еңгізілді?");
  if (question != 2006) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);

do {
  let question = +prompt("Юрий Гагарин ғарышқа қай жылы ұшты?");
  if (question != 1961) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);

var num1 = +prompt("");
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
