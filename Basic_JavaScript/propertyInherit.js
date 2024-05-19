function Author(name, nationality) {
  this.name = name;
  this.nationality = nationality;
}
Author.prototype.getName = function () {
  return this.name;
};
Author.prototype.getNationality = function () {
  return this.nationality;
};

function Book(name, author, nationality) {
  this.name = name;
  this.author = author;
  this.nationality = nationality;
}
Book.prototype.getBookName = function () {
  return this.name;
};
Object.setPrototypeOf(Book, Author);
