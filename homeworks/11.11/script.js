var isSan = prompt("Үш (a,b,c) сан енгізіңіз");

if (isSan == "a + b > c, a + c > b, b + c > a") {
  alert("Бұл үшбұрыш жасай алады");
} else if (isSan == "a + b < c, a + c > b, b + c < a") {
  alert("Бұл үшбұрыш жасай алмайды");
}

alert(isSan > isSan);

//3
let upai = prompt("0-ден 100-ге дейін ұпай енгізіңіз");
switch (upai) {
  case "90-100":
    alert("Баға:A");
    break;
  case "80-89":
    alert("Баға: B");
    break;
  case "70-79":
    alert("Баға: C");
    break;
  case "60 - 69":
    alert("Баға: D");
    break;
  case "0-59":
    alert("Баға: F");
    break;
}
