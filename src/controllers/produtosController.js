const produtosService = require('../services/produtosService')

const getAllProdutos = async (req, res) => {
    try {
        const produtos = await produtosService.getAllProdutos();
        res.status(200).send(produtos);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getProdutoById = async (req, res) => {
    try {
        const produto = await produtosService.getProdutoById(req.params);
        res.status(200).send(produto);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postProduto = async (req, res) => {
    try {
        const produto = await produtosService.postProduto(req.body);
        res.status(201).send(produto);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchProduto = async (req, res) => {
    try {
        const produto = await produtosService.patchProduto(req.body);
        res.status(201).send(produto);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteProduto = async (req, res) => {
    try {
        let deletado = await produtosService.deleteProduto(req.params);
        let msg = deletado 
            ? `Produto ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum produto com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteProduto = deleteProduto;
module.exports.patchProduto = patchProduto;
module.exports.getAllProdutos = getAllProdutos;
module.exports.getProdutoById = getProdutoById;
module.exports.postProduto = postProduto; 