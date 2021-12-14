'use strict'

const Cadastro = use("App/Models/Cadastro");
const Cidade = use("App/Models/Cidade");

class CadastroController {
  async register({ request, response }) {
  const data  = request.only(["id_cidade", "access", "nome", "email", "cpf", "rg", "dataNasc", "telefone", "login", "senha", "logradouro", "numeroCasa", "bairro", "cep"])

    const cidade = await Cidade.find(data.id_cidade);

    if(!cidade) return response.status(400).send({msg: "Cidade não cadastrada"})

    const user = await Cadastro.create(data);

    return response.status(201).send({...user, cidade: [cidade], msg: 'Success'})
  }

  async listAll({ response }) {
    const cadastros = await Cadastro.all();



    // const res = await cadastros.rows.map((item) => {
    //   const object = item["$attributes"]

    //   const cidade = await Cidade.find(object.id)

    //   return {...object, cidade:[cidade]}
    // })

    let res = []

    for(let item of cadastros.rows) {
      const object = item["$attributes"]

      const cidade = await Cidade.find(object.id)

      res.push({...object, cidade:[cidade]})
    }

    return response.status(200).send(res)
  }

  async listOne({ response, params }) {
    const cadastro = await Cadastro.find(params.id);

     if(!cadastro) return response.status(400).send({msg: "Cadastro não encontrado"})

     const object = cadastro["$attributes"]

    const cidade = await Cidade.find(object.id_cidade);

    const res = {...object, cidade: [cidade]}


    return response.status(200).send(res)
  }

}

module.exports = CadastroController
