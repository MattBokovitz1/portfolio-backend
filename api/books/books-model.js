const db = require("../data/dbConfig");

module.exports = {
  addBook,
  updateBook,
  removeBook,
  getBookById,
  getBooks,
};

function addBook(data) {
  return db.select("*").from("books").insert(data);
}

function updateBook(id, changes) {
  return db.select("*").from("books").where({ id }).update(changes);
}

function removeBook(id) {
  return db.select("*").from("books").where({ id }).del();
}

function getBookById(id) {
  return db.select("*").from("books").where({ id }).first();
}

function getBooks() {
  return db.select("*").from("books");
}
