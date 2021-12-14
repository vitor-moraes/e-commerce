'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.integer('id_categoria').unsigned().references('id').inTable('categorias')
      table.string('descricao', 300)
      table.decimal('preco', 10,2)
      table.string('imagem', 3000)
      table.string('nome', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema
