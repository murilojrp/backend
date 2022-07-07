const unidadesMedidaController = require('../controllers/unidadesMedidaController');

module.exports = (app) => {
    app.get('/unidades-medida', unidadesMedidaController.getAllUnidadesMedida)
    app.get('/unidades-medida/:id', unidadesMedidaController.getUnidadesMedidaById)
    app.post('/unidades-medida', unidadesMedidaController.postUnidadesMedida)
    app.delete('/unidades-medida/:id', unidadesMedidaController.deleteUnidadesMedida)
    app.patch ('/unidades-medida', unidadesMedidaController.patchUnidadesMedida)
} 