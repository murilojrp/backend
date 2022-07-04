//importar a dependencia do express para a criação do servidor
const express = require('express');

//criar uma constante que representa a nossa aplicação como um todo
//vamos chamar ela de "app" e ela recebe a invocação do express
const app = express();
const db = require('./config/db');

//criação de rota que vai listar todos os cadastros
app.get('/clientes', async (req, res) => {
    const sql = 'select nome from clientes';
    const clientes = await db.query(sql);
    res.status(200).send({
        dados: clientes.rows
    });
});

//define-se em qual porta a aplicação vai rodar
//para isso usamos a função .listen()(PORT, CALLBACK FUNCTION)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta ${PORT}`)
})