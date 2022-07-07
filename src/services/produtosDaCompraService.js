const db = require('../config/db');

//consultar os produtos da compra
const getAllProdutosDaCompra = async () => {
    let sql = `
    select 
    c.id as compra,
    cl.nome as cliente,
    v.nome as vendedor,
    to_char(c.data_compra,'DD/MM/YYYY') as data_compra,
    concat('R$ ', (c.valor_total)) as valor_total,
    pr.itens
    from compra as c
    inner join clientes as cl on (cl.id = c.id_cliente)
    inner join vendedores as v on (c.id_vendedor = v.id)
    inner join (
        select
        pc.id_compra,
        array_agg(json_build_object(
                'item', pc.id_produtos,
                'nome', p.nome,
                'qtd', pc.quantidade,
                'unit', concat('R$ ', (pc.valor_unitario)),
                'total', concat('R$ ', (pc.valor_total))
        )) as itens
        from produtos_compra as pc
        inner join produtos as p on (pc.id_produtos = p.id)
        group by pc.id_compra
    ) as pr on (pr.id_compra = c.id)
    order by compra asc
    `;

    let notas = await db.query(sql);
    return notas.rows;
}

module.exports.getAllProdutosDaCompra = getAllProdutosDaCompra;