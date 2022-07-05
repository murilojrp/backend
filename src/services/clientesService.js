const db = require('../config/db');

//consultar o cliente
const getAllClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = await db.query(sql);
    return clientes.rows;
}

//consultar cliente pelo id
const getClienteById = async (params) => {
    let sql = `select * from clientes where id = $1`;
    let cliente = await db.query(sql, [params.id]);
    return cliente.rows;
}

//atualizar o cliente
const patchCliente = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo cliente
const postCliente = async (params) => {
    let { nome, cpf, telefone, email, data_nascimento, id_endereco } = params;
    let sql = `
        insert into clientes (
            nome, 
            cpf, 
            telefone, 
            email,
            data_nascimento, 
            id_endereco
        ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let insert = await db.query(sql, [nome, cpf, telefone, email, data_nascimento, id_endereco,]);
    return insert.rows[0];
} 


//deletar um cliente
const deleteCliente = async (params) => {
    let sql = 'delete from clientes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteCliente = deleteCliente;
module.exports.patchCliente = patchCliente;
module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postCliente = postCliente; 