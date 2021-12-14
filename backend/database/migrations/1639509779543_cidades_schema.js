'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CidadesSchema extends Schema {
  up () {
    this.create('cidades', (table) => {
      table.increments()
      table.string('cidade', 50)
      table.string('estado', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('cidades')
  }
}

module.exports = CidadesSchema
