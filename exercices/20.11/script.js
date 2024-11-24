console.log(add(4, 5));

function add(a, b) {
  return a + b;
}

//function kosu(a, b) {
//return a + b;
//}
//console.log(kosu(4, 6));

//const add = (a, b) => a + b;
//console.log(add(4, 6));

const findlength = (text) => text.length;
console.log(findlength("Hello,world!"));

//123-->321

function myFunction() {
  let num = 123;
  let numFirst;
  let numMiddle;
  let numLast;
  numFirst = (num % 10) * 100;
  numMiddle = (num % 100) - (num % 10);
  numLast = (num - (num % 100)) / 100;
  return numLast + numMiddle + numFirst == num;
}

console.log(myFunction());

function theGreatesr(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

const findMax = (x, y) => (x > y ? x : x < y ? y : "Ekeui ten"); //: болмаса
