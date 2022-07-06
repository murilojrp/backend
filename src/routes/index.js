const clientes = require('./clientesRoute')
const compra = require('./compraRoute')
const enderecos = require('./enderecosRoute')
const produtos = require('./produtosRoute')
const produtosCompra = require('./produtosCompraRoute')

module.exports = (app) => {
    clientes(app)
    compra(app)
    enderecos(app)
    produtos(app)
    produtosCompra(app)
} 