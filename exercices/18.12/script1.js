const container = document.getElementById("container");

const fruits = ["apple", "banana", "orande"];

fruits.forEach((fruit) => {
  const fruitDiv = document.createElement("div"); //Массивтегі әрбір жеміске жаңа элемент ашылады
  fruitDiv.style.display = "flex";
  fruitDiv.style.width = "300px";
  fruitDiv.style.justifyContent = "space-between";
  fruitDiv.innerHTML = `<span>${fruit}</span><button>Delete</button>`; //Элемент ішін атауымен жане батырмамен толтырам

  const deleteButton = fruitDiv.getElementsByTagName("buttom")[0]; //Элемент ішіндегі батырманы айнымалы ретінде сақтап аламын

  console.log(deleteButton);

  container.appendChild(fruitDiv); //Контейнерге сол элементімізді қосамыз

  deleteButton.addEventListener("click", () => {
    fruitDiv.remove(); //Батырманы басқан кезде элементті өшіру
  });
});
