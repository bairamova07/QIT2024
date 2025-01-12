const library = {
  books: [
    {
      title: "Абай жолы 1",
      author: "Мұхтар Әуезов",
      year: 1942,
    },
    {
      title: "Ақ азу",
      author: "Джек Лондон",
      year: 1906,
    },
  ],
  addBook: function (book) {
    this.books.push(book);
  },
};

//title,genre,author,year

addWithLoop();

function addWithLoop() {
  while (true) {
    let newBookTitle = prompt("Кітап атын енгіз немесе стоп деп жаз");
    if (newBook == "stop") break;
    let newBoolAuthor = prompt("Кітап авторын енгіз");
    let newBookYear = +prompt("Шыққан жылын толтыр");
    if (newBook == "stop") break;
    let newBook = {
      title: newBookTitle,
      author: newBoolAuthor,
      year: newBookYear,
    };
    library.addBook(newBook);
  }

  console.log(library.books);
}
