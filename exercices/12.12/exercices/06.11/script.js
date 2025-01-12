var age = prompt("Сіз нешедесіз?");

if (age >= 18) {
  alert("Сіз ересек адамсыз");
} else {
  alert("Сіз ересек емессіз");
}

var isRain = prompt(
  "Жаңбыр жауып жатыр мы?" + "\n" + "Тек қана  иә немесе жоқ деп жауап бер"
);

if (isRain == "иә") {
  var hasCar = prompt(
    "Sende kolik bar ma?" + "\n" + "Тек қана  иә немесе жоқ деп жауап бер"
  );

  if (hasCar == "иә") {
    alert("Mashinamen bar");
  } else if (hasCar == "жоқ") {
    alert("Abtobuspen bar");
  } else {
    alert("Дұрыс жауап бер");
  }
} else if (isRain == "жоқ") {
  var isMorning = prompt(
    "Қазір таң ба?" + "\n" + "Тек қана иә немесе жоқ деп жауап бер"
  ); //is morning

  if (isMorning == "Иә") {
    alert("Велосипедпен бар");
  } else if (isMorning == "жоқ") {
    alert("Көлікпен бар");
  } else {
    alert("дұрыс жауап бер");
  }
} else {
  alert("дұрыс жауап бер");
}

alert("Код аяқталды!");


