function fillArray() {
  let numbers = [];

  while (true) {
    let number = prompt("san endiz");
    if (number == "stop") break;
    if (isNaN(Number(number))) {
      numbers.push(number.toString());
    } else {
      numbers.push(number);
    }
  }

  return numbers;
}
//function square(array) {
//  return array.map((element) => element * element);
//}

console.log(fillArray());
