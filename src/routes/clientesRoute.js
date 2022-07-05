const clientesController = require('../controllers/clientesController');

module.exports = (app) => {
    app.get('/clientes', clientesController.getAllClientes)
    app.get('/clientes/:id', clientesController.getClienteById)
    app.post('/clientes', clientesController.postCliente)
    app.delete('/clientes/:id', clientesController.deleteCliente)
    app.patch ('/clientes', clientesController.patchCliente)
} 