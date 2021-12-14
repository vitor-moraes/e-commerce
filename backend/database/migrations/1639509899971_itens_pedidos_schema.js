'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItensPedidosSchema extends Schema {
  up () {
    this.create('itens_pedidos', (table) => {
      table.increments()
      table.integer('id_pedido').unsigned().references('id').inTable('pedidos')
      table.integer('id_produto').unsigned().references('id').inTable('produtos')
      table.integer('quantidade')
      table.timestamps()
    })
  }

  down () {
    this.drop('itens_pedidos')
  }
}

module.exports = ItensPedidosSchema
