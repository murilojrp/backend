const setoresService = require('../services/setoresService')

const getAllSetores = async (req, res) => {
    try {
        const setores = await setoresService.getAllSetores();
        res.status(200).send(setores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getSetoresById = async (req, res) => {
    try {
        const setores = await setoresService.getSetoresById(req.params);
        res.status(200).send(setores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postSetores = async (req, res) => {
    try {
        const setores = await setoresService.postSetores(req.body);
        res.status(201).send(setores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchSetores = async (req, res) => {
    try {
        const setores = await setoresService.patchSetores(req.body);
        res.status(201).send(setores);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteSetores = async (req, res) => {
    try {
        let deletado = await setoresService.deleteSetores(req.params);
        let msg = deletado 
            ? `Setor de id:${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum setor com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteSetores = deleteSetores;
module.exports.patchSetores = patchSetores;
module.exports.getAllSetores = getAllSetores;
module.exports.getSetoresById = getSetoresById;
module.exports.postSetores = postSetores; 