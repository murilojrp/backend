const produtosDaCompraController = require('../controllers/produtosDaCompraController');

module.exports = (app) => {
    app.get('/produtos-da-compra', produtosDaCompraController.getAllProdutosDaCompra)
} 