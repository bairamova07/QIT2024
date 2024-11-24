//Валюта конвертациясы
let money = prompt("Бірінші ақшаны енгіз");

let currency = prompt(
  "Валюта енгіз" + "\n dollar to tenge немесе tenge to dollar"
);

const moneyConvert = (x, z) => {
  if (currency == "dollar to tenge") {
    return x * 495;
  } else if (currency == "tenge to dollar") {
    return x / 495;
  } else {
    return "Durystap jaz!!!";
  }
};


function add (a,b){//Qarapaiym

}

const add1 = (function a,b){
    
}

alert("Конвертация нәтижесі:" + moneyConvert(money, currency));
