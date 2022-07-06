const produtosCompraController = require('../controllers/produtosCompraController');

module.exports = (app) => {
    app.get('/produtos-compra', produtosCompraController.getAllProdutosCompra)
    app.get('/produtos-compra/:id', produtosCompraController.getProdutosCompraById)
    app.post('/produtos-compra', produtosCompraController.postProdutosCompra)
    app.delete('/produtos-compra/:id', produtosCompraController.deleteProdutosCompra)
    app.patch ('/produtos-compra', produtosCompraController.patchProdutosCompra)
} 