//makes friend table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('east', function(table) {
      table.increments('id');
      table.string('name');
      table.string('address');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('east');
  };