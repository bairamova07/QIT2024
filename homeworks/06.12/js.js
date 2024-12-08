// №3
const students = [
  {
    name: "Айдана",
    age: 14,
    grade: "8 B",
  },
  {
    name: "Аяжан",
    age: 15,
    grade: "9A",
  },
  {
    name: "Аружан",
    age: 15,
    grade: "10Б",
  },
  {
    name: "Айша",
    age: 16,
    grade: "11 B",
  },
  {
    name: "Жанболат",
    age: 17,
    grade: "11Б",
  },
];
console.log(students);

function addStudents() {
  return students.sort((a, b) => a.age - b.age)[students.length - 1];
}
console.log(addStudents());

function maxStudent() {
  return students.filter((num) => num.age <= 14);
}
console.log(maxStudent());
