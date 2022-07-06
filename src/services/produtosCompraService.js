const db = require('../config/db');

//consultar o produtos_compra
const getAllProdutosCompra = async () => {
    let sql = 'select * from produtos_compra';
    let produtosCompra = await db.query(sql);
    return produtosCompra.rows;
}

//consultar produtos_compra pelo id
const getProdutosCompraById = async (params) => {
    let sql = `select * from produtos_compra where id = $1`;
    let produtosCompra = await db.query(sql, [params.id]);
    return produtosCompra.rows;
}

//atualizar o produtos_compra
const patchProdutosCompra = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update produtos_compra set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo produtos_compra
const postProdutosCompra = async (params) => {
    let { quantidade, valor_unitario, valor_total, id_produtos, id_compra } = params;
    let sql = `
        insert into produtos_compra (
            quantidade, 
            valor_unitario, 
            valor_total, 
            id_produtos, 
            id_compra
        ) values ($1, $2, $3, $4, $5) returning id`;
    let insert = await db.query(sql, [quantidade, valor_unitario, valor_total, id_produtos, id_compra]);
    return insert.rows[0];
} 


//deletar um produtos_compra
const deleteProdutosCompra = async (params) => {
    let sql = 'delete from produtos_compra where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteProdutosCompra = deleteProdutosCompra;
module.exports.patchProdutosCompra = patchProdutosCompra;
module.exports.getAllProdutosCompra = getAllProdutosCompra;
module.exports.getProdutosCompraById = getProdutosCompraById;
module.exports.postProdutosCompra = postProdutosCompra; 