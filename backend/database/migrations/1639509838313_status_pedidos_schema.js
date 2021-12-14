'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusPedidosSchema extends Schema {
  up () {
    this.create('status_pedidos', (table) => {
      table.increments()
      table.string('situacao', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('status_pedidos')
  }
}

module.exports = StatusPedidosSchema
