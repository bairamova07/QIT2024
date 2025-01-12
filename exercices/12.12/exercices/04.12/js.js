const studet = {
  name: "Алихан",
  age: 16,
};

const book = {
  title: "Name",
  author: "Name",
  year: 2016,
};

const array = [1, 2, 4];

const [num1, num2, num3] = array;

console.log(num1 + num2 + num3);

const { title, author, year } = book;

const { name, age } = studet;
console.log(name);
console.log(age);

const authors = {
  name: "Мұхтар Әуезов",
  birthYear: 1897,
};

const books = {
  title: "Абай жолы",
  //author:{...author}
  ...author,
};

console.log(books);
