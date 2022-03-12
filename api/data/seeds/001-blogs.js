/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("blogs").del();
  await knex("blogs").insert([
    { id: 1, title: "Title 1", date: "03/12/2022", article: "Example 1." },
    { id: 2, title: "Title 2", date: "03/12/2022", article: "Example 2." },
    { id: 3, title: "Title 3", date: "03/12/2022", article: "Example 3." },
  ]);
};
