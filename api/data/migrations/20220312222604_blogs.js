exports.up = function (knex) {
  return knex.schema.createTable("blogs", (tbl) => {
    tbl.increments();

    tbl.string("title").notNullable();

    tbl.string("date").notNullable();

    tbl.string("article", 100000).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("blogs");
};
