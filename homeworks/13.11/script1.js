//2-ші тарсырма
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

do {
  let question = +prompt("Қазақ хандығы қай жылы құрылды?");
  if (question != 1465) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);

do {
  let question = +prompt("Қазақстанның ұлттық валютасы қай жылы енгізілді?");
  if (question != 1993) {
    score--;
  } else {
    break;
  }
} while (true);
alert(score);
