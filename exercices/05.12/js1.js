const students = [
  { name: "Jasulan", age: 20, score: 30 },
  { name: "Jansaya", age: 18, score: 32 },
  { name: "Alia", age: 16, score: 29 },
  { name: "Janbolat", age: 21, score: 31 },
];

let attary = ["Jasulan", "Jansaya", "Alia", "Janbolat"];
attary.forEach(function (aty) {
  console.log(aty);
});

function addStudents() {
  return students.filter((num) => num.age >= 20);
}

addStudents();

console.log(addStudents(students));

function studentsScore() {
  return students.map((numm) => numm.score * 1.1); // 12 * 1.1
}

studentsScore();

console.log(studentsScore(students));

let score = [30, 32, 29, 31];
let san = score.reduce((result, num) => result + num, 0);

console.log(san);

function maxScore() {
  return students.sort((a, b) => a.score - b.score)[students.length - 1];
}

console.log(maxScore());
