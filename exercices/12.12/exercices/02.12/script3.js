const product = {
  name: "Ноутбук",
  price: 300000,
  discount: function (percent) {
    return this.price - (this.price * percent) / 100;
  },
};

console.log(product.discount(30));

const person = {
  name: "Айжан",
  greet: function () {
    return `Сәлем,` + this.name;
  },
};

console.log(person.greet());

const menu = {
  items: ["Pizza", "Sushi", "Cola"],
  listMenu: function () {
    return this.items.join(", ");
  },
};

console.log(menu.listMenu());

const library = {
  books: ["Ер төстік", "Абай жолы"],
  addBook: function (book) {
    this.books.push(book);
  },
};

//title,genre,author,year

addWithLoop();

function addWithLoop() {
  while (true) {
    let newBook = prompt("Кітап атын енгіз");
    if (newBook == "stop") break;
    library.addBook(newBook);
  }

  console.log(library.books);
}
