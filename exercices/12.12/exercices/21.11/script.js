function test() {
  let obshiiShet = 0;

  while (true) {
    let aqsha = +prompt("Ақшаны енгізініз");
    let cur = prompt("Валюта енгізініз (EUR/KZT/USD)");
    if (aqsha == 0) break;

    if (cur == "USD") {
      obshiiShet += aqsha * 0.85;
    } else if (cur == "KZT") {
      obshiiShet += aqsha * 0.002;
    } else if (cur == "EUR") {
      obshiiShet += aqsha;
    }
  }

  return obshiiShet;
}
alert(test());
