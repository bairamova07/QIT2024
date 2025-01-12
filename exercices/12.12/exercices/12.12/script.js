const form = document.getElementById("LoginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (event) => {
  //Сайт өздігіннен жаңартылғанын болдырмау
  event.preventDefault();

  let emailValue = document.getElementById("email").value; //эмайл инпутының информациясы
  let passwordValue = document.getElementById("password").value;

  console.log(emailValue, passwordValue);

  if (!emailValue.includes("@")) {
    errorMessage.textContent = "Сіз поштаңызды қате жаздыңыз";
  } else if (passwordValue.langth < 6) {
    errorMessage.textContent =
      "Құпия сөзіңіз кем дегенде 6 символдан тұру керек";
  } else {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Форма сәтті түрде жіберілді";
  }
});
