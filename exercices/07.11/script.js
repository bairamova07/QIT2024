var order = "";
var burger = prompt("Бургер тапсырыс беріңіз \nB) Сиыр етімен \nC)Фанта");

switch (burger) {
  case "A":
    order += "Tauyq etimen\n";
    break;
  case "B":
    order += "Siyr etimen\n";
    break;
  case "C":
    order += "Jylqy etimen\n";
    break;
  default:
    alert("Varianttyn bireuin tandanyz");
}

let number = prompt("1ден 3ке дейін сан таңдаңыз:");
var isCorrect = true;

switch (number) {
  case '1':
    alert('1 таңдадыңыз'); 
    break;
  case '2':
    alert('2 таңдадыңыз');
    break;
  case '3':
    alert('3 таңдадыңыз');
    break;
  default:
    alert('Qate variant');
    isCorrect = false;
}

if (!isCorrect == false) {
  number = prompt("1ден 3ке дейін сан таңдаңыз:");

  switch (number) {
    case '1':
      alert('1 таңдадыңыз');
      break;
    case '2':
      alert('2 таңдадыңыз');
      break;
    case '3':
      alert('3 таңдадыңыз');
      break;
    default:
      alert('Qate variant');
      isCorrect = false;
  }
}
