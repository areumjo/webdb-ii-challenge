
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.string('clean', 128);
      tbl.string('salvage', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('salvage');
      tbl.dropColumn('clean');
  })
};
