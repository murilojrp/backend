const db = require('../config/db');

//consultar um endereco
const getAllEnderecos = async () => {
    let sql = 'select * from enderecos';
    let endereco = await db.query(sql);
    return endereco.rows;
}

//consultar endereco pelo id
const getEnderecoById = async (params) => {
    let sql = `select * from enderecos where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}

//atualizar um endereco
const patchEndereco = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}


//inserir uma novo endereco
const postEndereco = async (params) => {
    let { rua, bairro, numero, estado, uf, municipio } = params;
    let sql = `
        insert into enderecos (
            rua, 
            bairro, 
            numero, 
            estado, 
            uf, 
            municipio
        ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let insert = await db.query(sql, [rua, bairro, numero, estado, uf, municipio]);
    return insert.rows[0];
} 


//deletar um endereco
const deleteEndereco = async (params) => {
    let sql = 'delete from enderecos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}
module.exports.deleteEndereco = deleteEndereco;
module.exports.patchEndereco = patchEndereco;
module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.postEndereco = postEndereco; 