var sum = 6;

console.log(sum > 3); // true

const g = 30;

console.log(sum >= 30);

var a = 5;
var b = 3;

console.log(a == b); //false

var a = 5;
var b = 3;

console.log(a != b); //true

var a = 5;
var b = 4;

//console.log (a==b);false

var x = 5;
var y = 3;

console.log(x >= y); //true

var a = 5;
var b = 4;
//bireui true bolgany jetkilikti
console.log(a != 3 || a > 5 || a == 7 || b == 3);

console.log(a != 4 || b == 4);
//barlyg shart
console.log(a == 5 && b != 3 && a > 0 && a + b == 0); //!=

let isOffRoad = false;
//!emes
console.log(!isOffRoad); //true

var age = 20;
var hasTicket = true;
var isVIP = false;

if ((age >= 18 && hasTicket) || isVIP) {
  //>=
  console.log("siz kire alasyz");
} else {
  console.log("bolmaidy");
}

var name = " Matiz";
var year = 2010;
var engine = 0.5;
var color = "red";

if (year >= 2013 && color == "red") {
  console.log("Alamyn");
} else if (engine == 0.8) {
  console.log("Meili, alamyn");
} else {
  console.log("almaimyn");
}

var age = 30;

console.log(age > 12 && age < 45);

var n = 21;

console.log(n % 2 == 0 && n <= 20 && n >= 50);

var a = 9;
var b = 9;
var p = (a + b) * 2;
console.log((p > 30 && p < 40) || a == m);
