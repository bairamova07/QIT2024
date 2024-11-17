var esim = prompt("What is your name?");

var isZakaz = prompt(
  "Бургер тапсырыс беріңіз" +
    "\n" +
    "A)Куриный" +
    "\n" +
    "B)Говяжий" +
    "\n" +
    "C)Етсіз"
);
var tapsyrys = "";

// if (isZakaz == "A") {
//   tapsyrys += "Куриный" + "\n";
// } else if (isZakaz == "B") {
//   tapsyrys += "Говяжий" + "\n";
// } else if (isZakaz == "C") {
//   tapsyrys += "Етсіз" + "\n";
// }

switch (isZakaz) {
  case 'A'
  alert ('Куриный\n')
  break;
  case 'B'
  alert ('Говяжий\n')
  break;
}

var isZakaz1 = prompt(
  "Сусын тапсырыс беріңіз" +
    "\n" +
    "A)Cola" +
    "\n" +
    "B)Sprite" +
    "\n" +
    "C)Fanta"
);
if (isZakaz1 == "A") {
  tapsyrys += "Cola" + "\n";
} else if (isZakaz1 == "B") {
  tapsyrys += "Sprite" + "\n";
} else if (isZakaz1 == "C") {
  tapsyrys += "Fanta" + "\n";
}

var isZakaz2 = prompt(
  "Пицца тапсырыс беріңіз" +
    "\n" +
    "A)Маргарита" +
    "\n" +
    "B)пеперони" +
    "\n" +
    "C)4 сыр"
);
if (isZakaz2 == "A") {
  tapsyrys += "маргарита";
} else if (isZakaz2 == "B") {
  tapsyrys += "пеперони" + "\n";
} else if (isZakaz2 == "C") {
  tapsyrys += "4 сыр" + "\n";
}

var isZakaz3 = prompt(
  "Соус тарсырыс беріңіз" +
    "\n" +
    "A)сырный" +
    "\n" +
    "B)кетчуп" +
    "\n" +
    "C)кисло-сладкий"
);
if (isZakaz3 == "A") {
  tapsyrys += "сырный";
} else if (isZakaz3 == "B") {
  tapsyrys += "кетчуп";
} else if (isZakaz3 == "C") {
  tapsyrys += "кисло-сладкий";
}

alert(tapsyrys + "\n" + "\n" + esim + "\n" + "06.11.2024");
