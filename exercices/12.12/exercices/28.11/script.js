//let numbers = [3, 4, 5, 6, "array", "sunday"];

//for (let i = 0; i < numbers.length; i++) {
//  console.log(numbers[i]);
//}

let numbers = [3, 4, 5, 6, "array", "sunday"];

for (let number of numbers) {
  console.log(number);
}

numbers.forEach(function (num) {
  console.log(num);
});

for (let number of numbers) {
  if (typeof number == "number") {
    console.log(number);
  }
}
let numbers1 = [3, 4, 5, 4];

let square = numbers1.map((element) => element * 3);

console.log(square);


