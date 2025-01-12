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

function sumOfArray(array) {
  return array.reduce((result, element) => result + element, 0);
}

let array = fillArray();
console.log(sumOfArray(array));
