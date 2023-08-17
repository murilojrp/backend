const produtosCompraService = require('../services/produtosCompraService')

const getAllProdutosCompra = async (req, res) => {
    try {
        const produtosCompra = await produtosCompraService.getAllProdutosCompra();
        res.status(200).send(produtosCompra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getProdutosCompraById = async (req, res) => {
    try {
        const produtosCompra = await produtosCompraService.getProdutosCompraById(req.params);
        res.status(200).send(produtosCompra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postProdutosCompra = async (req, res) => {
    try {
        const produtosCompra = await produtosCompraService.postProdutosCompra(req.body);
        res.status(201).send(produtosCompra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchProdutosCompra = async (req, res) => {
    try {
        const produtosCompra = await produtosCompraService.patchProdutosCompra(req.body);
        res.status(201).send(produtosCompra);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteProdutosCompra = async (req, res) => {
    try {
        let deletado = await produtosCompraService.deleteProdutosCompra(req.params);
        let msg = deletado 
            ? `produtosCompra ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum produtosCompra com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteProdutosCompra = deleteProdutosCompra;
module.exports.patchProdutosCompra = patchProdutosCompra;
module.exports.getAllProdutosCompra = getAllProdutosCompra;
module.exports.getProdutosCompraById = getProdutosCompraById;
module.exports.postProdutosCompra = postProdutosCompra; 