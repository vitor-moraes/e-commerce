'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CadastrosSchema extends Schema {
  up () {
    this.create('cadastros', (table) => {
      table.increments()
      table.integer('id_cidade').unsigned().references('id').inTable('cidades')
      table.integer('access').defaultTo(1)
      table.string('nome', 50)
      table.string('email', 50)
      table.string('cpf', 50)
      table.string('rg', 50)
      table.date('dataNasc')
      table.string('telefone', 50)
      table.string('login', 50)
      table.string('senha', 50)
      table.string('logradouro', 50)
      table.integer('numeroCasa')
      table.string('bairro', 50)
      table.string('cep', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('cadastros')
  }
}

module.exports = CadastrosSchema
