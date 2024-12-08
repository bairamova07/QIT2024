// const book = {
//   title: "Абай жолы",
//   author: {
//     name: "Иұхтар Әуезов",
//     birthYear: 1897,
//   },
//   pages: 300,
// };

// const { author, ...rest } = book; //rest Қалғаны
// console.log(author);
// console.log(rest);

const books = {
  title: "Абай жолы",
  author: "Мұхтар Әуезов",
  year: 1942,
};
const { title, author, year } = books;

console.log(title);
console.log(author);
console.log(year);

const fruit = ["алма", "almurt", "shie"];
const [a, ...b] = fruit;

console.log(a);
console.log(b);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

const user = {
  name: "Ali",
  age: 25,
};

const newUser = { ...user, hobbies: ["atqa", "suret"] };

console.log(newUser);

const users = {
  name: "Айжан",
  age: 25,
  profession: " мұғалім",
  //   greed:function(){
  //     return ``
  //   }
};

function addText() {
  return `Сәлем,менің атым ${users.name}! Жасым ${users.age}-те,${users.profession} болып жұмыс істеймін.`;
}

console.log(addText());

const userr = {
  name: "Айжан",
  friends: ["Диас", "Меруерт", "Алмас"],
};

function addUserr() {
  while (true) {
    let newFriend = prompt("Enter friends name:");
    if (newFriend == "stop") break;
    userr.friends.push(newFriend);
  }
}

addUserr();

console.log(userr.friends);

const students = [
  {
    name: "Abumansur",
    age: 13,
    score: [90, 80, 70, 65],
  },
  {
    name: "Nazar",
    age: 11,
    score: [60, 70, 80, 83],
  },
  {
    name: "Kausar",
    age: 13,
    score: [55, 60, 68, 70],
  },
  {
    name: "Eldos",
    age: 12,
  },
];

console.log(ortaBaga());

let name = prompt("Student name");

function findStudent(searchName) {
  return students.filter((object) => object.name == searchName); // [{name: "Asset", score: [45, 100, 200]}]
}

const foundScore = findStudent(name)[0].score;

const ortaBaga =
  foundScore.reduce((result, number) => result + number, 0) / foundScore.length;

console.log(ortaBaga);
