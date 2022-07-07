const db = require('../config/db');

//consultar o setores
const getAllSetores = async () => {
    let sql = 'select * from setores';
    let setores = await db.query(sql);
    return setores.rows;
}

//consultar setores pelo id
const getSetoresById = async (params) => {
    let sql = `select * from setores where id = $1`;
    let setores = await db.query(sql, [params.id]);
    return setores.rows;
}

//atualizar o setores
const patchSetores = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update setores set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo setores
const postSetores = async (params) => {
    let { nome, localizacao } = params;
    let sql = `
        insert into setores (
            nome, 
            localizacao
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [nome, localizacao]);
    return insert.rows[0];
} 


//deletar um setores
const deleteSetores = async (params) => {
    let sql = 'delete from setores where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteSetores = deleteSetores;
module.exports.patchSetores = patchSetores;
module.exports.getAllSetores = getAllSetores;
module.exports.getSetoresById = getSetoresById;
module.exports.postSetores = postSetores; 