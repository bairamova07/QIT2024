const apiUrl = "https://randomuser.me/api/";
const name = document.getElementById("name");
const email = document.getElementById("email");
const genter = document.getElementById("gnter");

fetch(apiUrl)
  .then((responce) => {
    if (!responce.ok) {
      throw new Error("Не удалось получить данные");
    }
    return responce.json();
  })
  .then((data) => {
    const name = data.name;
    const email = data.email;
    const genter = data.genter;

    document.body.innerHTML = `
    Толық аты жөні:${data.name}
Почтасы:${data.email}
Жынысы:${data.genter}`;
  })
  .catch((error) => innerHTML.error("Қате шықты", error));

// const apiUrl = "https://jsonplaceholder.typicodee.com/todos";

// fetch(apiUrl)
//   .then((responce) => {
//     if (!responce.ok) {
//       throw new Error("Не удалось получить данные");
//     }
//     return responce.json();
//   })
//   .then((data) => {
//     const postTitle = data.Title;
//     const postCompleted = data.completed;
//     document.body.innerHTML = `
//     <p>Аяқталды:${data.Title}</p>
//     <p>Аяқталмаған:${data.completed}`;
//   })
//   .catch((error) => {
//     console.error("Ошибка:", error);
//     document.body.innerHTML = "<p>Не удалось загрузить пост.</p>";
//   });
