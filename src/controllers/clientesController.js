const clientesService = require('../services/clientesService')

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.status(200).send(clientes);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getClienteById = async (req, res) => {
    try {
        const cliente = await clientesService.getClienteById(req.params);
        res.status(200).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postCliente = async (req, res) => {
    try {
        const cliente = await clientesService.postCliente(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchCliente = async (req, res) => {
    try {
        const cliente = await clientesService.patchCliente(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteCliente = async (req, res) => {
    try {
        let deletado = await clientesService.deleteCliente(req.params);
        let msg = deletado 
            ? `Cliente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cliente com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.deleteCliente = deleteCliente;
module.exports.patchCliente = patchCliente;
module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postCliente = postCliente; 