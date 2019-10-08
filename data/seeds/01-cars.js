
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 128934, make: "Kia", model: "Sportage", mileage: 2555, clean: "clean", salvage: "one"},
        { VIN: 234234, make: "Audi", model: "A8", mileage: 399, clean: "clean", salvage: "one"},
        { VIN: 198235, make: "Infinity", model: "X5", mileage: 30000, clean: "clean", salvage: "one"}
      ]);
    });
};
