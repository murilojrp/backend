const vendedoresService = require('../services/vendedoresService')

const getAllVendedores = async (req, res) => {
    try {
        const vendedores = await vendedoresService.getAllVendedores();
        res.status(200).send(vendedores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getVendedoresById = async (req, res) => {
    try {
        const vendedores = await vendedoresService.getVendedoresById(req.params);
        res.status(200).send(vendedores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postVendedores = async (req, res) => {
    try {
        const vendedores = await vendedoresService.postVendedores(req.body);
        res.status(201).send(vendedores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchVendedores = async (req, res) => {
    try {
        const vendedores = await vendedoresService.patchVendedores(req.body);
        res.status(201).send(vendedores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteVendedores = async (req, res) => {
    try {
        let deletado = await vendedoresService.deleteVendedores(req.params);
        let msg = deletado 
            ? `Vendedor de id:${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhuma vendedor com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteVendedores = deleteVendedores;
module.exports.patchVendedores = patchVendedores;
module.exports.getAllVendedores = getAllVendedores;
module.exports.getVendedoresById = getVendedoresById;
module.exports.postVendedores = postVendedores; 