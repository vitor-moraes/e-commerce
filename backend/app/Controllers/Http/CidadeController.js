'use strict'
const Cidade = use("App/Models/Cidade");

class CidadeController {
  async register({ request, response }) {
    const data  = request.only(["cidade", "estado"])

    const cidade = await Cidade.create(data);


    return response.status(201).send({...cidade, msg: 'Success'})
  }

  async listAll({ response }) {
    const res = await Cidade.all();

    return response.status(200).send(res)
  }
}

module.exports = CidadeController
