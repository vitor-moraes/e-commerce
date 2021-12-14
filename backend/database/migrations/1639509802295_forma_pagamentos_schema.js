'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormaPagamentosSchema extends Schema {
  up () {
    this.create('forma_pagamentos', (table) => {
      table.increments()
      table.string('descricao', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('forma_pagamentos')
  }
}

module.exports = FormaPagamentosSchema
