const setoresController = require('../controllers/setoresController');

module.exports = (app) => {
    app.get('/setores', setoresController.getAllSetores)
    app.get('/setores/:id', setoresController.getSetoresById)
    app.post('/setores', setoresController.postSetores)
    app.delete('/setores/:id', setoresController.deleteSetores)
    app.patch ('/setores', setoresController.patchSetores)
} 