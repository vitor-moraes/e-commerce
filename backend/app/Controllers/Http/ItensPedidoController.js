'use strict'

const ItensPedido = use("App/Models/ItensPedido");
const Pedidos = use("App/Models/Pedidos");
const Produtos = use("App/Models/Produtos");

const Database = use("Database");

class ItensPedidoController {
  async register({ request, response }) {
    const data  = request.only(["id_pedido", "id_produto", "quantidade"])

      const pedido = await Pedidos.find(data.id_pedido);

      if(!pedido) return response.status(400).send({msg: "Pedido não cadastrado"})

      const produto = await Produtos.find(data.id_produto);

      if(!produto) return response.status(400).send({msg: "Produto não cadastrado"})

      //const itensPed = await Database.table("itens_pedidos").where("id_pedido", pedido.id).andWhere("id_produto", produto.id);
      //const itensProd = await ItensPedido.findBy("id_produto", produto.id);

      //if(itensPed) return response.status(400).send({msg: 'Item já cadastrado'})

      const itensPedido = await ItensPedido.create(data);

      return response.status(201).send({...itensPedido, pedido: [pedido], produto:[produto], msg: 'Success'})
    }

    async listAll({ response }) {
      const itensPedidos = await ItensPedido.all();

      let res = []

      for(let item of itensPedidos.rows) {
        const object = item["$attributes"]

        const pedido = await Pedidos.find(object.id_pedido);

        const produto = await Produtos.find(object.id_produto);

        res.push({...object, pedido: [pedido], produto:[produto]})
      }

      return response.status(200).send(res)
    }

    async listOne({ response, params }) {
      const itensPedidos = await ItensPedido.find(params.id);

       if(!itensPedidos) return response.status(400).send({msg: "Item não encontrado"})

       const object = itensPedidos["$attributes"]
       const pedido = await Pedidos.find(object.id_pedido);

       const produto = await Produtos.find(object.id_produto);

      const res = {...object, pedido: [pedido], produto:[produto]}


      return response.status(200).send(res)
    }
}

module.exports = ItensPedidoController
