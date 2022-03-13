exports.up = function (knex) {
  return knex.schema.createTable("potential", (tbl) => {
    tbl.increments();

    tbl.string("title").notNullable();

    tbl.string("author").notNullable();

    tbl.string("date").notNullable();

    tbl.string("rating").notNullable();

    tbl.string("topic").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("potential");
};
