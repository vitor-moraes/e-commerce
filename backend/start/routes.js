'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.post("register", "CidadeController.register");
  Route.get("listAll", "CidadeController.listAll");
  Route.get("listOne/:id", "CidadeController.listOne");
 }).prefix("api/cidade");

 Route.group(() => {
  Route.post("register", "CategoriaController.register");
  Route.get("listAll", "CategoriaController.listAll");
  Route.get("listOne/:id", "CategoriaController.listOne");
 }).prefix("api/categoria");

 Route.group(() => {
  Route.post("register", "FormaPagamentoController.register");
  Route.get("listAll", "FormaPagamentoController.listAll");
  Route.get("listOne/:id", "FormaPagamentoController.listOne");
 }).prefix("api/formaPag");

 Route.group(() => {
  Route.post("register", "StatusPedidoController.register");
  Route.get("listAll", "StatusPedidoController.listAll");
  Route.get("listOne/:id", "StatusPedidoController.listOne");
 }).prefix("api/status");

 Route.group(() => {
  Route.post("register", "CadastroController.register");
  Route.get("listAll", "CadastroController.listAll");
  Route.get("listOne/:id", "CadastroController.listOne");
 }).prefix("api/cadastro");

 Route.group(() => {
  Route.post("register", "ProdutoController.register");
  Route.get("listAll", "ProdutoController.listAll");
  Route.get("listOne/:id", "ProdutoController.listOne");
 }).prefix("api/produto");

 Route.group(() => {
  Route.post("register", "PedidoController.register");
  Route.get("listAll", "PedidoController.listAll");
  Route.get("listOne/:id", "PedidoController.listOne");
 }).prefix("api/pedido");


 Route.group(() => {
  Route.post("register", "ItensPedidoController.register");
  Route.get("listAll", "ItensPedidoController.listAll");
  Route.get("listOne/:id", "ItensPedidoController.listOne");
 }).prefix("api/itensPedido");

 //Route.post('/cidade/register', "CidadeController.register")
