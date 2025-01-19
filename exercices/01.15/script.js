// //fetch("https://dog.ceo/api/breeds/image/random");
// const apiUrl = "https://dog.ceo/api/breeds/image/random";
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Қате шығарылды");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const imgElement = document.createElement("img");
//     imgElement.src = data.message;
//     imgElement
//   });

//fetch("fb2cff02b71168e9f0c68fd3f83d168a");
const apiUrl = "fb2cff02b71168e9f0c68fd3f83d168a";
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ауа райы жайындағы мәліметтер қате шығарылды!");
    }
    return response.json();
  })
  .then((data) => {});
