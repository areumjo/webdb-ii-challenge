
exports.up = function(knex, Promise) {
  // car table ==> cars-schema
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.decimal('VIN').unique().notNullable();
      tbl.string('make');
      tbl.string('model');
      tbl.decimal('mileage');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};
