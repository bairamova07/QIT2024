const librarry = {
  title: "Менің атым Қожа",
  author: "Бердібек Соқпақбаев",
  pages: 150,
  isRead: false,
  addBooks: function () {
    this.isRead = !this.isRead;
    return this.isRead;
  },
  addLibrarry: function () {
    return `Сіз ${this.author} авторының ${this.title} кітабын оқып жатырсыз!`;
  },
};

console.log(librarry.addBooks());
