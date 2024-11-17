let num = +prompt("Enter number"); //10
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(factorial);

for (let i = 10; i >= 1; i--) {
  console.log(i); //10-nan 1-ge deiyn shygarady
}

for (let i = 0; i <= 3; i++) {
  let surak = prompt("Қазақстан нешінші жылы тәуелсіздік алды ?");

  if (surak == "1991") {
    alert("дұрыс");
    if (i >= 2) {
      alert("бірақ,интернеттен қарағаның болмады");
    }

    break;
  } else {
    alert("Қате");
  }
}

let nam = "Nazar";

//alert(numbers[3]); //4

for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
}

let num1 = +prompt("Enter any number"); //10
let result = 0;

for (let i = 1; i <= num1; i++) {
  result += i;
}
console.log(result);

let num2 = +prompt("Enter any number");

for (let i = 1; i <= 10; i++) {
  console.log(num2 + " x " + i + " = " +(num2 * i));
}
