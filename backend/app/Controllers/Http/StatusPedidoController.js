'use strict'

const StatusPedido = use("App/Models/StatusPedido");

class StatusPedidoController {
  async register({ request, response }) {
    const data  = request.only(["situacao"])

    const status = await StatusPedido.create(data);


    return response.status(201).send({...status, msg: 'Success'})
  }

  async listAll({ response }) {
    const res = await StatusPedido.all();

    return response.status(200).send(res)
  }
}

module.exports = StatusPedidoController
