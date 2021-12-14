'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('descricao', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriasSchema
