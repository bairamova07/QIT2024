// let num = 1;
// let result = 0;

// while (num <= 20) {
//   result = result + num;
// }

// console.log(result);

let question;
let score = 5;

do {
  let question = +prompt("Қазақсан қай жылы тәуелсіздік алды?");
  if (question != 1991) {
    score--;
  } else {
    break;
  }
} while (true);

alert(score);
