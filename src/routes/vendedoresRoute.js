const vendedoresController = require('../controllers/vendedoresController');

module.exports = (app) => {
    app.get('/vendedores', vendedoresController.getAllVendedores)
    app.get('/vendedores/:id', vendedoresController.getVendedoresById)
    app.post('/vendedores', vendedoresController.postVendedores)
    app.delete('/vendedores/:id', vendedoresController.deleteVendedores)
    app.patch ('/vendedores', vendedoresController.patchVendedores)
} 