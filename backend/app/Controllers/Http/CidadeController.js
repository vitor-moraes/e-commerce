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

  async listOne({ response, params }) {
    const cidade = await Cidade.find(params.id);

     if(!cidade) return response.status(400).send({msg: "Cidade não encontrada"})


    return response.status(200).send(cidade)
  }
}

module.exports = CidadeController
