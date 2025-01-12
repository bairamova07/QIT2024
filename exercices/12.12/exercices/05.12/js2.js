const tauar = [
  { name: "Киім", score: 1200 },
  { name: "Аяқ киім", score: 3500 },
  { name: "Ойыншық", score: 500 },
  { name: "Көкеністер", score: 900 },
  { name: "Жиһаздар", score: 100000 },
];
function addTauarlar() {
  return tauar.filter((sandar) => sandar.score > 1000);
}
addTauarlar();

console.log(addTauarlar(tauar));

let tauarlar = [1200, 3500, 500, 900, 100000];
let san = tauarlar.reduce((result, num) => result + num, 0);

console.log(san);

let tauarr = ["Киім", "Аяқ киім", "Ойыншық", "Көкеністер", "Жиһаздар"];
tauarr.forEach(function (aty) {
  console.log(aty);
});

function satuTauar() {
  return tauar.filter((sann) => sann.score > 10000);
}
satuTauar();
console.log(satuTauar(tauar));

function maxTauar() {
  return satuTauar().map((baga) => baga.score * 0.85);
}

maxTauar();
console.log(maxTauar());
