function helper() {
  let result = 0;
  let tauarlar = "";
  let tauar;

  do {
    let tauar = prompt("Tauar");
    let baga = +prompt("baga");
    if (tauar != "stop") {
      tauarlar += tauar + "\n";
    }
  } while (tauar != "stop");

  alert(result + "\n" + tauarlar);
}

helper();
