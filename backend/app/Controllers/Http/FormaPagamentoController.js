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

  async listOne({ response, params }) {
    const formaPag = await FormaPagamento.find(params.id);

     if(!formaPag) return response.status(400).send({msg: "Cidade não encontrada"})


    return response.status(200).send(formaPag)
  }
}

module.exports = FormaPagamentoController
