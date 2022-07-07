const db = require('../config/db');

//consultar o vendedores
const getAllVendedores = async () => {
    let sql = 'select * from vendedores';
    let vendedores = await db.query(sql);
    return vendedores.rows;
}

//consultar vendedores pelo id
const getVendedoresById = async (params) => {
    let sql = `select * from vendedores where id = $1`;
    let vendedores = await db.query(sql, [params.id]);
    return vendedores.rows;
}

//atualizar o vendedores
const patchVendedores = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update vendedores set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir um novo vendedores
const postVendedores = async (params) => {
    let { nome, cpf, telefone, email, data_nascimento, salario, id_endereco } = params;
    let sql = `
        insert into vendedores (
            nome, 
            cpf, 
            telefone, 
            email, 
            data_nascimento, 
            salario, 
            id_endereco
        ) values ($1, $2, $3, $4, $5, $6, $7) returning id`;
    let insert = await db.query(sql, [nome, cpf, telefone, email, data_nascimento, salario, id_endereco]);
    return insert.rows[0];
} 


//deletar um vendedores
const deleteVendedores = async (params) => {
    let sql = 'delete from vendedores where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteVendedores = deleteVendedores;
module.exports.patchVendedores = patchVendedores;
module.exports.getAllVendedores = getAllVendedores;
module.exports.getVendedoresById = getVendedoresById;
module.exports.postVendedores = postVendedores; 