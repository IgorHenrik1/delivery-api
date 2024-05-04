/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
    knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.text('products');
        table.text('description');
        table.text('price');
        table.text('rate');
        table.text('value');
        table.text('payments');
        table.text('address').references('address').inTable('users');

        table.timestamp('created_at').defaultTo(knex.fn.now());
    });

exports.down = (knex) => knex.schema.dropTable('orders');
