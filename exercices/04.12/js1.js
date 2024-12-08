const authors = {
  name: "Мұхтар Әуезов",
  birthYear: 1897,
};

const book = {
  title: "Абай жолы",
  author: { ...author },
  //   ...author,
  pages: 300,
};

console.log(book);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
