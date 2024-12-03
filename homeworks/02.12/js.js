const libraryy = {
  books: [
    {
      title: "Менің атым Қожа",
      author: "Бердібек Соқпақбаев",
      pages:
        "кейбір басылымдарда 90-100 бет шамасында ,басқа форматтарда 150 бетке дейін жетуі мүмкін",
    },
    
  ],
  addBook: function (book) {
    this.books.push(book);
  },
};
console.log(libraryy.books);
