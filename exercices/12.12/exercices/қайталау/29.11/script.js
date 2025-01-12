let product = ["apple", "orange", "grapes"];
product[1] = "potato";
//let take = product.slice([1]);
//console.log(take);
console.log(product);

let numbers = [2223, 455, 2, 53, 4, 5, 5, 2];
let maxNumb = [0];
for (let i = 0; i < numbers.length; i++) {
  maxNumb = Math.max(maxNumb, numbers[i]);
}
console.log(maxNumb);

//let max = Math.max(...numbers);
//let min = Math.min(...numbers);

//console.log(max);
//console.log(min);

//let empty = ("Html", "css", "js", "react");
//let takes = empty.join(" Language");
//console.log(takes);

let name = [3, 4, 2, 5, 6, 7];
let ne = name.reduce((total, nea) => total + nea);
console.log(`reduce ${ne}`);

let numberss = [2, 4, 6, 8];
let triple = numberss.map((numm) => numm ** 3);
let oddNumberss = [];
for (let numberss of triple) {
  if (numberss % 2 !== 0) {
    oddNumberss.push(numberss);
  }
}
console.log(triple);

let num = [23, 45, 21, 45, 67, 54, 22, 44, 56];
let jupSandar = num.filter((element) => element % 2 === 0);
let taqSandar = num.filter((element) => element % 2 !== 0);

console.log(jupSandar);
console.log(taqSandar);

let date = ["js", "react", "css", "images"];
let combines = date[3].toLowerCase();
console.log(combines);
