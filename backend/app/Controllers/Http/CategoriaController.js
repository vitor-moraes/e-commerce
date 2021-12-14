'use strict'

const Categorias = use("App/Models/Categorias");

class CategoriaController {
  async register({ request, response }) {
    const data  = request.only(["descricao"])

    const categoria = await Categorias.create(data);


    return response.status(201).send({...categoria, msg: 'Success'})
  }

  async listAll({ response }) {
    const res = await Categorias.all();

    return response.status(200).send(res)
  }
}

module.exports = CategoriaController
