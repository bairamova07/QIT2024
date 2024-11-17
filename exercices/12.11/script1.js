for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " -жұп");
  } else {
    console.log(i + "-тақ");
  }
}

let num = +prompt("Enter any number");
for (let i = 0; i <= num; i++) {
  if (i === 3) {
    break; //Циклды аяқтау
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; //i = 3 болғанда интерацияны өткізіп кетеді
  }
  console.log(i); //1,2,4,5 (3 жоқ)
}
