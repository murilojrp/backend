const db = require('../config/db');

//consultar os produtos
const getAllProdutos = async () => {
    let sql = 'select * from produtos';
    let produtos = await db.query(sql);
    return produtos.rows;
}

//consultar produto pelo id
const getProdutoById = async (params) => {
    let sql = `select * from produtos where id = $1`;
    let produto = await db.query(sql, [params.id]);
    return produto.rows;
}

//atualizar um produto
const patchProduto = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update produtos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo produto
const postProduto = async (params) => {
    let { nome, codigo, estoque, valor_unitario, id_setor, aliquota, id_unidades_medida } = params;
    let sql = `
        insert into produtos (
            nome, 
            codigo, 
            estoque, 
            valor_unitario, 
            id_setor, 
            aliquota, 
            id_unidades_medida
        ) values ($1, $2, $3, $4, $5, $6, $7) returning id`;
    let insert = await db.query(sql, [nome, codigo, estoque, valor_unitario, id_setor, aliquota, id_unidades_medida]);
    return insert.rows[0];
} 


//deletar um produto
const deleteProduto = async (params) => {
    let sql = 'delete from produtos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteProduto = deleteProduto;
module.exports.patchProduto = patchProduto;
module.exports.getAllProdutos = getAllProdutos;
module.exports.getProdutoById = getProdutoById;
module.exports.postProduto = postProduto; 