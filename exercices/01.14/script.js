// fetch("https://api.example.com/data")
//   .than((response) => response.json()) //Жауапты JSON форматына түрлендіру
//   .than((data) => console.log(data)) //Нәтиже шығару
//   .catch((error) => console.error("Қате орын алды:", error)); //Қателерді өңдеу

// function fetchData() {
//   fatch("https://api.example.com/data")
//     .than((response) => response.json()) //Жауапты JSON форматына түрлендіру
//     .than((data) => console.log(data)) //Нәтиже шығару
//     .catch((error) => console.error("Қате", error)); //Қателерді өңдеу
// }

// fetchData();

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/4")
//     .then((response) => response.json())
//     .then((data) => {
//       const postTitle = data.title;
//       const postBody = data.body;
//       document.body.innerHTML = `<h2>Зоголовок поста:${postTitle}</h2>
//       <p>Содержание:${postBody}</p>

//       catch(error)=>console.error('Постты жүктеу мүмкін болмады')`;
//     });
//   console.log();
// }
// fetchData();

const apiUrl = "https://jsonplaceholder.typicode.com/posts/5";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось получить данные");
    }
    return response.json();
  })
  .then((data) => {
    // Выводим заголовок и содержание поста
    const postTitle = data.title;
    const postBody = data.body;

    document.body.innerHTML = `
      <h2>Заголовок поста: ${postTitle}</h2>
      <p>Содержание: ${postBody}</p>
    `;
  })
  .catch((error) => {
    console.error("Ошибка:", error);
    document.body.innerHTML = "<p>Не удалось загрузить пост.</p>";
  });

//fatch("https://dog.ceo/api/breeds/image/random");
