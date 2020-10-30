'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPostSchema extends Schema {
  up () {
    this.create('user_posts', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('caption').notNullable()
      table.string('imageurl').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_posts')
  }
}

module.exports = UserPostSchema
