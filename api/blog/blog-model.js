const db = require("../data/dbConfig");

module.exports = {
  addBlog,
  updateBlog,
  removeBlog,
  getBlogById,
  getBlogs,
};

function addBlog(data) {
  return db.select("*").from("blogs").insert(data);
}

function updateBlog(id, changes) {
  return db.select("*").from("blogs").where({ id }).update(changes);
}

function removeBlog(id) {
  return db.select("*").from("blogs").where({ id }).del();
}

function getBlogById(id) {
  return db.select("*").from("blogs").where({ id }).first();
}

function getBlogs() {
  return db.select("*").from("blogs");
}
