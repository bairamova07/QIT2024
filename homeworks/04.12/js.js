const kosu = {
  plus: (a, b, c, d) => {
    return a + b + c + d;
  },
};
console.log(kosu.plus(1, 2, 3, 4)); // {a: 1, b: 2, c: 3, d: 4}

const kosu1 = { a: 1, b: 2 };
const kosu2 = { ...kosu1, c: 3, d: 4 };

console.log(kosu2);

const students = [
  {
    id: 1,
    name: "Nazar",
  },
  {
    id: 2,
    name: "Abumansur",
  },
  {
    id: 3,
    name: "Eldos",
  },
  {
    id: 4,
    name: "Nursultan",
  },
  {
    id: 5,
    name: "Amir",
  },
  {
    id: 6,
    name: "Kausar",
  },
  {
    id: 7,
    name: "Dilnaz",
  },
  {
    id: 8,
    name: "Aiaulym",
  },
  {
    id: 9,
    name: "Gulaida",
  },
  {
    id: 10,
    name: "Aidyn",
  },
  {
    id: 11,
    name: "Aset",
  },
  {
    id: 12,
    name: "Elnaz",
  },
  {
    id: 13,
    name: "Syrym",
  },
  {
    id: 14,
    name: "Mukhammedali",
  },
];

// function addStudent() {
//   return students.id.filter((element) => element % 2 !== 0);
// }

// //  return user.hobbies.filter((hobby) => hobby.length <= 10);
// console.log(addStudent());
console.log(students);

const library = {
  name: "Books",
  book: [
    {
      name: "Абай жолы",
      pages: 300,
    },
    {
      name: "Менің атым Қожа",
      pages: 150,
    },
    {
      name: "Ақбілек",
      pages: 257,
    },
    {
      name: "Ұшқан ұя",
      pages: 175,
    },
  ],
};

console.log(library);
