const db = require("../data/dbConfig");

module.exports = {
  addProject,
  updateProject,
  removeProject,
  getProjectById,
  getProjects,
};

function addProject(data) {
  return db.select("*").from("projects").insert(data);
}

function updateProject(id, changes) {
  return db.select("*").from("projects").where({ id }).update(changes);
}

function removeProject(id) {
  return db.select("*").from("projects").where({ id }).del();
}

function getProjectById(id) {
  return db.select("*").from("projects").where({ id }).first();
}

function getProjects() {
  return db.select("*").from("projects");
}
