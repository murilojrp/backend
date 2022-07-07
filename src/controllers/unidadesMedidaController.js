const unidadesMedidaService = require('../services/unidadesMedidaService')

const getAllUnidadesMedida = async (req, res) => {
    try {
        const unidadesMedida = await unidadesMedidaService.getAllUnidadesMedida();
        res.status(200).send(unidadesMedida);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getUnidadesMedidaById = async (req, res) => {
    try {
        const unidadesMedida = await unidadesMedidaService.getUnidadesMedidaById(req.params);
        res.status(200).send(unidadesMedida);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postUnidadesMedida = async (req, res) => {
    try {
        const unidadesMedida = await unidadesMedidaService.postUnidadesMedida(req.body);
        res.status(201).send(unidadesMedida);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchUnidadesMedida = async (req, res) => {
    try {
        const unidadesMedida = await unidadesMedidaService.patchUnidadesMedida(req.body);
        res.status(201).send(unidadesMedida);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteUnidadesMedida = async (req, res) => {
    try {
        let deletado = await unidadesMedidaService.deleteUnidadesMedida(req.params);
        let msg = deletado 
            ? `Unidade de medida de id:${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhuma unidade de medida com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteUnidadesMedida = deleteUnidadesMedida;
module.exports.patchUnidadesMedida = patchUnidadesMedida;
module.exports.getAllUnidadesMedida = getAllUnidadesMedida;
module.exports.getUnidadesMedidaById = getUnidadesMedidaById;
module.exports.postUnidadesMedida = postUnidadesMedida; 