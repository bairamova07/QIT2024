// setTimeout(() => {
//   console.log("2 секунд өтті");
// }, 2000);

// let count = 0;
// const interval = setInterval(() => {
//   count++;
//   console.log(`Санау: ${count}`);
//   if (count === 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// function fetchData() {
//   console.log("Деректерді алу..."),
//     setTimeout(() => {
//       console.log("Деректер сәтті алынды!");
//     }, 2000);
// }

// fetchData();

// setTimeout(() => {
//   console.log("Hello, JavaScript");
// }, 5000);

// function set() {
//   setTimeout(() => {
//     alert("Hello,JavaScript");
//   }, 5000);
// }

// set();

// function userName() {
//   console.log("Деректер жүктелуде...");
//   console.log("Деректер сәтті жүктелді:");
//   const users = [
//     { id: 1, name: "Alihan", age: 25 },
//     { id: 2, name: "Aigerim", age: 30 },
//     { id: 3, name: "Medet", age: 22 },
//   ];
//   setTimeout(() => {
//     console.log(users[0]);
//   }, 2000);
//   setTimeout(() => {
//     console.log(users[1]);
//   }, 4000);
//   setTimeout(() => {
//     console.log(users[2]);
//   }, 6000);
// }
// userName();

const id = document.getElementById("h2");

let count = 6;
const interval = setInterval(() => {
  count--;
  console.log(`${count}`);
  if (count === 1) {
    console.log("Санақ аяқталды!");
    clearInterval(interval);
  }
}, 1000);
