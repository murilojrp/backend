const compraService = require('../services/compraService')

const getAllCompra = async (req, res) => {
    try {
        const compra = await compraService.getAllCompra();
        res.status(200).send(compra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getCompraById = async (req, res) => {
    try {
        const compra = await compraService.getCompraById(req.params);
        res.status(200).send(compra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postCompra = async (req, res) => {
    try {
        const compra = await compraService.postCompra(req.body);
        res.status(201).send(compra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchCompra = async (req, res) => {
    try {
        const compra = await compraService.patchCompra(req.body);
        res.status(201).send(compra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteCompra = async (req, res) => {
    try {
        let deletado = await compraService.deleteCompra(req.params);
        let msg = deletado 
            ? `Compra ${req.params.id} deletada com sucesso` 
            : `Não foi encontrado nenhuma Compra com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteCompra = deleteCompra;
module.exports.patchCompra = patchCompra;
module.exports.getAllCompra = getAllCompra;
module.exports.getCompraById = getCompraById;
module.exports.postCompra = postCompra; 