const produtosDaCompraService = require('../services/produtosDaCompraService')

const getAllProdutosDaCompra = async (req, res) => {
    try {
        const produtosDaCompra = await produtosDaCompraService.getAllProdutosDaCompra();
        res.status(200).send(produtosDaCompra);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllProdutosDaCompra = getAllProdutosDaCompra;