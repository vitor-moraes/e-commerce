'use strict'

const Pedidos = use("App/Models/Pedidos");
const FormaPagamento = use("App/Models/FormaPagamento");
const StatusPedido = use("App/Models/StatusPedido");
const Cadastro = use("App/Models/Cadastro");

class PedidoController {
  async register({ request, response }) {
    const data  = request.only(["id_cadastro", "id_forma_pag", "id_status", "frete", "total", "dataPedido"])

      const formaPag = await FormaPagamento.find(data.id_forma_pag);

      if(!formaPag) return response.status(400).send({msg: "Forma de Pagamento não cadastrada"})

      const status = await StatusPedido.find(data.id_status);

      if(!status) return response.status(400).send({msg: "Status não cadastrado"})

      const user = await Cadastro.find(data.id_cadastro);

      if(!user) return response.status(400).send({msg: "Cadastro não encontrado"})

      const produto = await Pedidos.create(data);

      return response.status(201).send({...produto, formaPag: [formaPag], status:[status], user:[user], msg: 'Success'})
    }

    async listAll({ response }) {
      const produtos = await Pedidos.all();

      let res = []

      for(let item of produtos.rows) {
        const object = item["$attributes"]

        const formaPag = await FormaPagamento.find(object.id_forma_pag);

        const status = await StatusPedido.find(object.id_status);

        const user = await Cadastro.find(object.id_cadastro);

        res.push({...object, formaPag: [formaPag], status:[status], user:[user]})
      }

      return response.status(200).send(res)
    }

    async listOne({ response, params }) {
      const pedido = await Pedidos.find(params.id);

       if(!pedido) return response.status(400).send({msg: "Pedidos não encontrado"})

       const object = pedido["$attributes"]

       const formaPag = await FormaPagamento.find(object.id_forma_pag);

       const status = await StatusPedido.find(object.id_status);

       const user = await Cadastro.find(object.id_cadastro);

      const res = {...object, formaPag: [formaPag], status:[status], user:[user]}


      return response.status(200).send(res)
    }
}

module.exports = PedidoController
