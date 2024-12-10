let num = 10;

while (num % 3 == 0 && num % 5 == 0) {
  if (num % 2 === 0) {
    continue;
  }
  console.log("FizzBuzz");
}
