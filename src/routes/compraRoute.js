const compraController = require('../controllers/compraController');

module.exports = (app) => {
    app.get('/compra', compraController.getAllCompra)
    app.get('/compra/:id', compraController.getCompraById)
    app.post('/compra', compraController.postCompra)
    app.delete('/compra/:id', compraController.deleteCompra)
    app.patch ('/compra', compraController.patchCompra)
} 