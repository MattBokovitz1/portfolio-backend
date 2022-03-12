exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();

    tbl.string("title").notNullable();

    tbl.text("description", 1000).notNullable();

    tbl.string("project_link").notNullable();

    tbl.string("github_link").notNullable();
    tbl.string("project_photo");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
