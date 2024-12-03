let tizim = ["Алма", "шие", "Банан", "Қант/Шекер"]; //Array
tizim[3] = "Qarbyz";
tizim[1] = "Mango";
tizim[2] = "Avocado";
console.log(tizim);

let fruits = ["Алма", "Банан", "шие"];
console.log(fruits[0]);
console.log(fruits[1]);

let arr1 = [1, 2, 43];
let arr2 = [5, 6, 4];
//arr1 = arr2;

arr2[0] = 7;
arr1[2] = 9;
console.log(arr1);
console.log(arr2);

let fruits1 = ["Алма", "Банан", "Шие", "Апелсин"];

fruits1.push("Orange", "Qarbyz", "Mango");
fruits1.push("Onion"); //Соңына қосу
let basket = fruits1.pop(); //Соңғы элементті қайтарад
fruits1.shift(); //Басындағы элементті қайтарады
fruits1.unshift("Melon", "Peach"); //Басына қосу

console.log(fruits1);

console.log(fruits1.slice(2, 6)); //

for (let i = 0; i < 4; i++) {
  console.log(fruits1[i]);
}

function test() {
  let array = [1, 2, 3, 4, 5, 6];
  array.splice(2, 4, 33, 44, 55); //жою,қосу,алмастыру;
  console.log(array);
}
test();

function formatNumber(phone) {
  return `+${phone.slice(0)}(${phone.slice(1, 4)}) ${phone.slice(
    4,
    7
  )} ${phone.slice(7, 11)}`;
}
console.log(formatNumber("77478093958")); //+7 747 809 3958


