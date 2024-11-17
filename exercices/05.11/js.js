let num1 = Number(prompt("Enter any number :"));
let num2 = Number(prompt("Enter second number!"));

alert(num1 / num2);
console.log(num1 / num2);

//let num1 = parseInt(prompt("Enter any number :"));
//let num2 = parseInt(prompt("Enter second number!"));

var birthYear = prompt("Enter your year of birth:");
alert(2024 - birthYear);

//if (typeof birthYear=="string"){
alert("Дұрыс сан енгіз");
//}else if {typeof birthYear=="number"
//   alert(2024- birthYear);
//}
var birthYear = prompt("Enter your year of birth:");

if (isNaN(birthYear)) {
  alert("Дұрыс сан енгіз");
} else {
  alert(2024 - birthYear);
}
var question1 = prompt("Қазақ хандығы қашан құрылды?" + "\n"+ "A)1465"+ "\n"+"B)1765");
var answer1 = 1465;
var question2 = prompt("Қазақстан нешінші жылы тәуелсіздік алды");
var answer2 = 1991;
var question3 = prompt("Орбұлақ шайқасы?");
var answer3 = 1643;
var question4 = ("Патша үкіметінің Кіші жүзде хандық билікті жоюы?");
var answer4 = 1824;
var question5 = ("Қасым ханның билік құрған жылдары?");
var answer5 = 1511 - 1518;
var question6 = ("Хақназар ханның билік құрған жылдары?");
var answer6 = 1680 - 1715;
var question7 = ("Қазақ-жоңғар соғыстарының басталуы?");
var answer7 = 1723;
var question8 = ("Аңырақай шайқасы?");
var answer8 = 1729;
var question9 = ("Қазақ хандығының ресми түрде жойылуы?");
var answer9 = 1822;
var question10 = ("Абылай ханның билік құрған жылдары?");
var answer10 = 1771 - 1781;
var score = 0;
if ((question1 = answer1)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question2 = answer2)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}
if ((question3 = answer3)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question4 = answer4)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question5 = answer5)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question6 = answer6)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question7 = answer7)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question8 = answer8)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question9 = answer9)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

if ((question10 = answer2)) {
  score++;
  alert("+1");
}else{
    alert("Wrong")
}

alert("Сіз" + score + "ұпай алдыңыз!");
