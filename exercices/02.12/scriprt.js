let array = [4, 5, 6, 1, 8, 9, 10, 8]; //3,5

function moreThanNumber(number, array) {
  //function сүзіп алу
  return array.filter((num) => num > number);
}

function sumOfNumbers(array) {
  //reduce барлық элементтерді жинау
  return array.reduce(total, (numm) => total + numm);
}

function averageNumber(array) {
  //Арефметикалық ортасы
  let sum = sumOfNumbers(array);
  let len = array.length;
  return sum / len;
}
//2,10
function diapazon(start, end, array) {
  return array.filter((num) => num >= start && start <= end);
}

console.log(moreThanNumber(5, sandar));
console.log(sumOfNumbers(sandar));
console.log(averageNumber(sandar));
console.log(diapazon(3, 8, sandar));
