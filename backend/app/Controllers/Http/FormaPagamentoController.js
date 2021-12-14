'use strict'

const FormaPagamento = use("App/Models/FormaPagamento");

class FormaPagamentoController {
  async register({ request, response }) {
    const data  = request.only(["descricao"])

    const formaPag = await FormaPagamento.create(data);


    return response.status(201).send({...formaPag, msg: 'Success'})
  }

  async listAll({ response }) {
    const res = await FormaPagamento.all();

    return response.status(200).send(res)
  }
}

module.exports = FormaPagamentoController
