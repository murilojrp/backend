const produtosController = require('../controllers/produtosController');

module.exports = (app) => {
    app.get('/produtos', produtosController.getAllProdutos)
    app.get('/produtos/:id', produtosController.getProdutoById)
    app.post('/produtos', produtosController.postProduto)
    app.delete('/produtos/:id', produtosController.deleteProduto)
    app.patch ('/produtos', produtosController.patchProduto)
} 