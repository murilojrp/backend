const db = require('../config/db');

//consultar a Compra
const getAllCompra = async () => {
    let sql = 'select * from compra';
    let compra = await db.query(sql);
    return compra.rows;
}

//consultar Compra pelo id
const getCompraById = async (params) => {
    let sql = `select * from compra where id = $1`;
    let compra = await db.query(sql, [params.id]);
    return compra.rows;
}

//atualizar a Compra
const patchCompra = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update compra set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir uma novo Compra
const postCompra = async (params) => {
    let { valor_total, data_compra, id_cliente, id_vendedor } = params;
    let sql = `
        insert into compra (
            valor_total, 
            data_compra, 
            id_cliente, 
            id_vendedor
        ) values ($1, $2, $3, $4) returning id`;
    let insert = await db.query(sql, [valor_total, data_compra, id_cliente, id_vendedor]);
    return insert.rows[0];
} 


//deletar uma Compra
const deleteCompra = async (params) => {
    let sql = 'delete from compra where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteCompra = deleteCompra;
module.exports.patchCompra = patchCompra;
module.exports.getAllCompra = getAllCompra;
module.exports.getCompraById = getCompraById;
module.exports.postCompra = postCompra; 