//let apple = 1;

//while (apple <= 10) {
// if (apple % 3 != 0) {
//  continue;
// }
//console.log(apple + "-інші алма");
//apple++;
//}

//console.log("Алма жинап біттім");

let num = 0;
while (num < 10) {
  if (num === 5) {
    console.log("Цикл тоқтатылды,сан табылды:", num);
    break; //Цикл осы жерден тоқтайды
  }
  console.log(num);
  num++;
}

let num1 = 0;
while (num1 < 10) {
  num1++;
  if (num1 % 2 === 0) {
    continue; //Жұп сан болғандықтан,циклдің келесі қадамы
  }
  console.log(num1);
}

let num2 = 1;
while (num2 <= 10) {
  if (num2 % 2 == 0) {
    console.log(num2 + "-Жұп сан");
  } else {
    console.log(num2 + "-тақ сан ");
  }
  num2++;
}

