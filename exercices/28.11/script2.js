function fillArray() {
  let numbers = [];

  while (true) {
    let number = prompt("san endiz");
    if (number == "stop") break;
    if (isNaN(Number(number))) {
      numbers.push(number);
    } else {
      numbers.push(Number(number));
    }
  }

  return numbers;
}
let array = fillArray();

let onSandar = array.filter((element) => element > 0);
let terisSandar = array.filter((element) => element < 0);
let jupSandar = array.filter((element) => element % 2 === 0);
let taqSandar = array.filter((element) => element % 2 !== 0);
console.log(onSandar);
console.log(jupSandar);
console.log(taqSandar);
console.log(terisSandar);
