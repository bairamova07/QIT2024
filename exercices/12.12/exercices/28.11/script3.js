//function fillArray() {
//  let numbers = [];

//  while (true) {
//    let number = prompt("san endiz");
//    if (number == "stop") break;
//    if (isNaN(Number(number))) {
//      numbers.push(number);
//    } else {
//      numbers.push(Number(number));
//    }
//  }

//  return numbers;
//}
let search = prompt("Search...");

let array = ["Iphone", "Samsung", "Xiaomi", "LG", "Hisense"];

let show = array.filter((element) =>
  element.toLowerCase().includes(search.toLowerCase())
);
console.log(`Тауарлар:${show}`); //console.log(`Тауарлар:` + show)
console.log(`Тауар саны:${show.length}`);




