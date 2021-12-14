'use strict'
const Produtos = use("App/Models/Produtos");
const Categorias = use("App/Models/Categorias");

class ProdutoController {
  async register({ request, response }) {
    const data  = request.only(["id_categoria", "descricao", "preco", "imagem", "nome"])

      const categoria = await Categorias.find(data.id_categoria);

      if(!categoria) return response.status(400).send({msg: "Categoria não cadastrada"})

      const produto = await Produtos.create(data);

      return response.status(201).send({...produto, categoria: [categoria], msg: 'Success'})
    }

    async listAll({ response }) {
      const produtos = await Produtos.all();

      let res = []

      for(let item of produtos.rows) {
        const object = item["$attributes"]

        const categoria = await Categorias.find(object.id)

        res.push({...object, categoria:[categoria]})
      }

      return response.status(200).send(res)
    }

    async listOne({ response, params }) {
      const produto = await Produtos.find(params.id);

       if(!produto) return response.status(400).send({msg: "Produto não encontrado"})

       const object = produto["$attributes"]

      const categoria = await Categorias.find(object.id_categoria);

      const res = {...object, categoria: [categoria]}


      return response.status(200).send(res)
    }

}

module.exports = ProdutoController
