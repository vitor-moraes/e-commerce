'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.integer('id_cadastro').unsigned().references('id').inTable('cadastros')
      table.integer('id_forma_pag').unsigned().references('id').inTable('forma_pagamentos')
      table.integer('id_status').unsigned().references('id').inTable('status_pedidos')
      table.decimal('frete', 10, 2)
      table.decimal('total', 10, 2)
      table.dateTime('dataPedido')
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema
