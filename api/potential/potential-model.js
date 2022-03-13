const db = require("../data/dbConfig");

module.exports = {
  addPotential,
  updatePotential,
  removePotential,
  getPotentialById,
  getPotential,
};

function addPotential(data) {
  return db.select("*").from("potential").insert(data);
}

function updatePotential(id, changes) {
  return db.select("*").from("potential").where({ id }).update(changes);
}

function removePotential(id) {
  return db.select("*").from("potential").where({ id }).del();
}

function getPotentialById(id) {
  return db.select("*").from("potential").where({ id }).first();
}

function getPotential() {
  return db.select("*").from("potential");
}
