const db = require('../config/db');

//consultar o unidades_medida
const getAllUnidadesMedida = async () => {
    let sql = 'select * from unidades_medida';
    let unidadesMedida = await db.query(sql);
    return unidadesMedida.rows;
}

//consultar unidades_medida pelo id
const getUnidadesMedidaById = async (params) => {
    let sql = `select * from unidades_medida where id = $1`;
    let unidadesMedida = await db.query(sql, [params.id]);
    return unidadesMedida.rows;
}

//atualizar o unidades_medida
const patchUnidadesMedida = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update unidades_medida set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo unidades_medida
const postUnidadesMedida = async (params) => {
    let { nome, abreviacao } = params;
    let sql = `
        insert into unidades_medida (
            nome, 
            abreviacao
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [nome, abreviacao]);
    return insert.rows[0];
} 


//deletar um unidades_medida
const deleteUnidadesMedida = async (params) => {
    let sql = 'delete from unidades_medida where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteUnidadesMedida = deleteUnidadesMedida;
module.exports.patchUnidadesMedida = patchUnidadesMedida;
module.exports.getAllUnidadesMedida = getAllUnidadesMedida;
module.exports.getUnidadesMedidaById = getUnidadesMedidaById;
module.exports.postUnidadesMedida = postUnidadesMedida; 