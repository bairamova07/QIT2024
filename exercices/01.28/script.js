// //Мәлімет сақтау
// localStorage.setItem("name", "Айжан");

// //Мәліметті оқу
// const name = localStorage.getItem("name");
// console.log(name); //Айжан

// //Мәліметті өшіру
// localStorage.removeItem("name");

// //Барлық мәліметті тазалау
// localStorage.clear();

// function saveData() {
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   localStorage.setItem("name", "name");
//   localStorage.setItem("age", "age");
//   alert("Мәлімет сақталды!");
// }

function loadData() {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  if (name && age) {
    alert(`Атыңыз:${name},ЖасыңызЖ${age}`);
  } else {
    alert("Мәлімет табылмады.");
  }
}
loadData();

const object = {
  name: "Aizhan",
  age: 21,
};

localStorage.setItem("person", JSON.stringify(object));


const ObjectInLoad=()
